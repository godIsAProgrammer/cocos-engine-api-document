/* eslint-disable no-unused-vars */
import { addData, getData } from './indexDB.js';
const dbName = 'cocosSearch';
const tableName = 'searchIndex';
let INDEXS = {};


const LOCAL_STORAGE = {
  EXPIRE_KEY: 'docsify.search.expires',
  INDEX_KEY: 'docsify.search.index',
};

export function getAndRemoveConfig(str = '') {
 const config = {};

 if (str) {
   str = str
     .replace(/^('|")/, '')
     .replace(/('|")$/, '')
     .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, (m, key, value) => {
       if (key.indexOf(':') === -1) {
         config[key] = (value && value.replace(/&quot;/g, '')) || true;
         return '';
       }

       return m;
     })
     .trim();
 }

 return { str, config };
}

function resolveExpireKey(namespace) {
  return namespace
    ? `${LOCAL_STORAGE.EXPIRE_KEY}/${namespace}`
    : LOCAL_STORAGE.EXPIRE_KEY;
}

function resolveIndexKey(namespace) {
  return namespace
    ? `${LOCAL_STORAGE.INDEX_KEY}/${namespace}`
    : LOCAL_STORAGE.INDEX_KEY;
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}

function getAllPaths(router) {
  const paths = [];

  Docsify.dom
    .findAll('.sidebar-nav a:not(.section-link):not([data-nosearch])')
    .forEach(node => {
      const href = node.href;
      const originHref = node.getAttribute('href');
      const path = router.parse(href).path;

      if (
        path &&
        paths.indexOf(path) === -1 &&
        !Docsify.util.isAbsolutePath(originHref)
      ) {
        paths.push(path);
      }
    });

  return paths;
}

function getTableData(token) {
  if (!token.text && token.type === 'table') {
    token.cells.unshift(token.header);
    token.text = token.cells
      .map(function(rows) {
        return rows.join(' | ');
      })
      .join(' |\n ');
  }
  return token.text;
}

function getListData(token) {
  if (!token.text && token.type === 'list') {
    token.text = token.raw;
  }
  return token.text;
}

function saveData(maxAge, expireKey, indexKey) {
  // searchData[expireKey] = Date.now() + maxAge;
  // searchData[indexKey] = INDEXS;

  // localStorage.setItem(expireKey, Date.now() + maxAge);
  // localStorage.setItem(indexKey, JSON.stringify(INDEXS));
}

export function genIndex(path, content = '', router, depth) {
  const tokens = window.marked.lexer(content);
  const slugify = window.Docsify.slugify;
  const index = {};
  let slug;
  let title = '';

  tokens.forEach(function(token, tokenIndex) {
    if (token.type === 'heading' && token.depth <= depth) {
      const { str, config } = getAndRemoveConfig(token.text);

      if (config.id) {
        slug = router.toURL(path, { id: slugify(config.id) });
      } else {
        slug = router.toURL(path, { id: slugify(escapeHtml(token.text)) });
      }

      if (str) {
        title = str
          .replace(/<!-- {docsify-ignore} -->/, '')
          .replace(/{docsify-ignore}/, '')
          .replace(/<!-- {docsify-ignore-all} -->/, '')
          .replace(/{docsify-ignore-all}/, '')
          .trim();
      }

      index[slug] = { slug, title: title, body: '' };
    } else {
      if (tokenIndex === 0) {
        slug = router.toURL(path);
        index[slug] = {
          slug,
          title: path !== '/' ? path.slice(1) : 'Home Page',
          body: token.text || '',
        };
      }

      if (!slug) {
        return;
      }

      if (!index[slug]) {
        index[slug] = { slug, title: '', body: '' };
      } else if (index[slug].body) {
        token.text = getTableData(token);
        token.text = getListData(token);

        index[slug].body += '\n' + (token.text || '');
      } else {
        token.text = getTableData(token);
        token.text = getListData(token);

        index[slug].body = index[slug].body
          ? index[slug].body + token.text
          : token.text;
      }
    }
  });
  slugify.clear();
  return index;
}

export function ignoreDiacriticalMarks(keyword) {
  if (keyword && keyword.normalize) {
    return keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  return keyword;
}

/**
 * @param {String} query Search query
 * @returns {Array} Array of results
 */
 export function search(query) {
    const matchingResults = [];
    let data = [];
  // console.log(INDEXS)
    Object.keys(INDEXS).forEach(key => {
      data = data.concat(INDEXS[key])
    });
  // Object.keys(INDEXS).forEach(key => {
  //   data = data.concat(Object.keys(INDEXS[key]).map(page => INDEXS[key][page]));
  // });

    query = query.trim();
    let keywords = query.split(/[\s\-，\\/]+/);
    if (keywords.length !== 1) {
      keywords = [].concat(query, keywords);
    }

    for (let i = 0; i < data.length; i++) {
      const post = data[i];
      let matchesScore = 0;
      let resultStr = '';
      let handlePostTitle = '';
      let handlePostContent = '';
      const postTitle = post.title && post.title.trim();
      const postContent = post.body && post.body.trim();
      const postUrl = post.slug || '';

      if (postTitle) {
        keywords.forEach(keyword => {
          // From https://github.com/sindresorhus/escape-string-regexp
          const regEx = new RegExp(
            escapeHtml(ignoreDiacriticalMarks(keyword)).replace(
              /[|\\{}()[\]^$+*?.]/g,
              '\\$&'
            ),
            'gi'
          );
          let indexTitle = -1;
          let indexContent = -1;
          handlePostTitle = postTitle
            ? escapeHtml(ignoreDiacriticalMarks(postTitle))
            : postTitle;
          handlePostContent = postContent
            ? escapeHtml(ignoreDiacriticalMarks(postContent))
            : postContent;

          indexTitle = postTitle ? handlePostTitle.search(regEx) : -1;
          indexContent = postContent ? handlePostContent.search(regEx) : -1;

          if (indexTitle >= 0 || indexContent >= 0) {
            matchesScore += indexTitle >= 0 ? 3 : indexContent >= 0 ? 2 : 0;
            if (indexContent < 0) {
              indexContent = 0;
            }

            let start = 0;
            let end = 0;

            start = indexContent < 11 ? 0 : indexContent - 10;
            end = start === 0 ? 70 : indexContent + keyword.length + 60;

            if (postContent && end > postContent.length) {
              end = postContent.length;
            }

            const matchContent =
              '...' +
              handlePostContent
                .substring(start, end)
                .replace(
                  regEx,
                  word => `<em class="search-keyword">${word}</em>`
                ) +
              '...';

            resultStr += matchContent;
          }
        });

        if (matchesScore > 0) {
          const matchingPost = {
            title: handlePostTitle,
            content: postContent ? resultStr : '',
            url: postUrl,
            score: matchesScore,
          };

          matchingResults.push(matchingPost);
        }
      }
  }

  // 搜索权重
	const  a = matchingResults.map(v => {
		let count = 0;
		const { title, content } = v;
		const regEx = new RegExp(
		escapeHtml(ignoreDiacriticalMarks(keywords[0])).replace(
			/[|\\{}()[\]^$+*?.]/g,
			'\\$&'
		),
		'gi'
		);

		const fMatch = new RegExp('Module: ' + keywords[0], 'gi');
		const firstMatch = new RegExp('Class: ' + keywords[0], 'gi');
        const secondMatch = new RegExp('Functions: ' + keywords[0], 'gi');
        const tMatch = new RegExp('Methods: ' + keywords[0], 'gi');

		if (fMatch.test(title)) {
			const step =  `Module: ${keywords[0]}`.length - title.length;
			count = 9000 + parseInt(step);
		}

		if (firstMatch.test(title)) {
			const step =  `Class: ${keywords[0]}`.length - title.length;
			count = 8000 + parseInt(step);
		}

		if (secondMatch.test(title)) {
			const step =  `Functions: ${keywords[0]}`.length - title.length;
			count = 7000 + parseInt(step);
		}

		if (tMatch.test(title)) {
			const step =  `Methods: ${keywords[0]}`.length - title.length;
			count = 6000 + parseInt(step);
		}

		return {
			...v,
			title: title.replace(regEx,word => `<em class="search-keyword">${word}</em>`),
			count
		}

	})

  // 按权重排序
	return a.sort((a, b) => {
		return b.count - a.count;
	})
}

export function init(config, vm) {
  const langKey = vm.route.path.match(/en|zh/, 'gi')[0];
  const isAuto = config.paths === 'auto';
  const paths = isAuto ? getAllPaths(vm.router) : config.paths;
  let namespaceSuffix = '';

  //清空搜索结果
  // const $panel = Docsify.dom.find('.results-panel');
  // $panel.innerHTML = '';

  // auto
  if (paths.length && isAuto && config.pathNamespaces) {
    const path = paths[0];

    if (Array.isArray(config.pathNamespaces)) {
      namespaceSuffix =
        config.pathNamespaces.filter(
          prefix => path.slice(0, prefix.length) === prefix
        )[0] || namespaceSuffix;
    } else if (config.pathNamespaces instanceof RegExp) {
      const matches = path.match(config.pathNamespaces);

      if (matches) {
        namespaceSuffix = matches[0];
      }
    }
    const isExistHome = paths.indexOf(namespaceSuffix + '/') === -1;
    const isExistReadme = paths.indexOf(namespaceSuffix + '/README') === -1;
    if (isExistHome && isExistReadme) {
      paths.unshift(namespaceSuffix + '/');
    }
  } else if (paths.indexOf('/') === -1 && paths.indexOf('/README') === -1) {
    paths.unshift('/');
  }

  // const expireKey = resolveExpireKey(config.namespace) + namespaceSuffix;
  // const indexKey = resolveIndexKey(config.namespace) + namespaceSuffix;
  //
  // const isExpired = localStorage.getItem(expireKey) < Date.now();
  // INDEXS = JSON.parse(localStorage.getItem(indexKey));

  Docsify.get('/cocos-engine-api-document/plugin/search/search.json', false, vm.config.requestHeaders).then(
    async (result) => {
      // 添加数据
      addData(dbName, tableName, JSON.parse(result));
      // 获取数据
      getData(dbName, tableName, '/', (event) => {
        INDEXS = event.target.result[langKey];
      })

    }
  );

  // if (isExpired) {
  //   INDEXS = {};
  // } else if (!isAuto) {
  //   return;
  // }
  //
  // const len = paths.length;
  // let count = 0;





  // paths.forEach(path => {
  //   if (INDEXS[path]) {
  //     return count++;
  //   }
  //
  //   Docsify.get(vm.router.getFile(path), false, vm.config.requestHeaders).then(
  //     result => {
  //
  //       INDEXS[path] = genIndex(path, result, vm.router, config.depth);
  //       // console.log(INDEXS, 'ooooo');
  //       len === ++count && saveData(config.maxAge, expireKey, indexKey);
  //     }
  //   );
  // });
}
