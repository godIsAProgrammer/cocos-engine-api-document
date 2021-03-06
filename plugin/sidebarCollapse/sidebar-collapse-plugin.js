// import './style.css'

function sidebarCollapsePlugin(hook, _) {
    hook.doneEach(function (html, next) {
        scrollTo()
        next(html)
    })

    hook.afterEach(function(html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        scrollTo()
        next(html);
    });


    hook.ready(function () {
        const  sidebarNav = document.querySelector('.sidebar-nav');
        sidebarNav.addEventListener('click', handleMenuClick)

        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        const config = { attributes: true, childList: true }

        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(record) {
                //监听属性
                if(record.type === 'attributes'){
                   if ( record.target.className.indexOf('hide') === -1 ) {
                       scrollTo()
                   }
                }
            });
        });
        observer.observe(sidebarNav, config);
    })
}

function init() {
    renderStyle();
    document.addEventListener('scroll', scrollSyncMenuStatus)
}

function scrollTo () {
    const activeNode = getActiveNode()
    openActiveToRoot(activeNode)
    addFolderFileClass()
    addLevelClass()
    syncScrollTop(activeNode)
}

let lastTop // 侧边栏滚动状态
function syncScrollTop(activeNode) {

    if (!lastTop) {
        lastTop = Docsify.dom.find('.sidebar-nav').getBoundingClientRect().top
    }

    if (activeNode && lastTop !== undefined) {
        const curTop = activeNode.getBoundingClientRect().top
        document.querySelector('.sidebar').scrollBy(0, curTop - lastTop)
    }

    // if (activeNode) {
    //   const curTop = activeNode.getBoundingClientRect().top
    //   document.querySelector('.sidebar').scrollBy(0, curTop)

    //   console.log(curTop, '22222');
    // }


}

function scrollSyncMenuStatus() {
    requestAnimationFrame(() => {
        let el = document.querySelector('.app-sub-sidebar > .active')
        if (el) {
            el.parentNode.parentNode
                .querySelectorAll('.app-sub-sidebar')
                .forEach((dom) => dom.classList.remove('open'))
            while (el.parentNode.classList.contains('app-sub-sidebar')) {
                if (el.parentNode.classList.contains('open')) {
                    break
                } else {
                    el.parentNode.classList.add('open')
                    el = el.parentNode
                }
            }
        }
    })
}

function handleMenuClick(e) {
    lastTop = e.target.getBoundingClientRect().top

    const newActiveNode = findTagParent(e.target, 'LI', 2)
    if (!newActiveNode) return
    if (newActiveNode.classList.contains('open')) {
        newActiveNode.classList.remove('open')
        // docsify 默认行为会操作 collapse，我们异步之后修补
        setTimeout(() => {
            newActiveNode.classList.add('collapse')
        }, 0)
    } else {
        removeOpenToRoot(getActiveNode())
        openActiveToRoot(newActiveNode)
        // docsify 默认行为会操作 collapse，我们异步之后修补
        setTimeout(() => {
            newActiveNode.classList.remove('collapse')
        }, 0)
    }
    syncScrollTop(newActiveNode)
}

function getActiveNode() {
    let node = document.querySelector('.sidebar-nav .active')

    if (!node) {
        const curLink = document.querySelector(
            `.sidebar-nav a[href="${decodeURIComponent(location.hash).replace(
                    / /gi,
                    '%20'
            )}"]`
        )
        node = findTagParent(curLink, 'LI', 2)
        if (node) {
            node.classList.add('active')
        }
    }
    return node
}

function openActiveToRoot(node) {
    if (node) {
        node.classList.add('open', 'active')
        while (node && node.className !== 'sidebar-nav' && node.parentNode) {
            if (
                node.parentNode.tagName === 'LI' ||
                node.parentNode.className === 'app-sub-sidebar'
            ) {
                node.parentNode.classList.add('open')
            }
            node = node.parentNode
        }
    }
}

function removeOpenToRoot(node) {
    if (node) {
        node.classList.remove('open', 'active')
        while (node && node.className !== 'sidebar-nav' && node.parentNode) {
            if (
                node.parentNode.tagName === 'LI' ||
                node.parentNode.className === 'app-sub-sidebar'
            ) {
                node.parentNode.classList.remove('open')
            }
            node = node.parentNode
        }
    }
}

function findTagParent(curNode, tagName, level) {
    if (curNode && curNode.tagName === tagName) return curNode
    let l = 0
    while (curNode) {
        l++
        if (l > level) return
        if (curNode.parentNode.tagName === tagName) {
            return curNode.parentNode
        }
        curNode = curNode.parentNode
    }
}

function addFolderFileClass() {
    document.querySelectorAll('.sidebar-nav li').forEach((li) => {
        if (li.querySelector('ul:not(.app-sub-sidebar)')) {
            li.classList.add('folder')
        } else {
            li.classList.add('file')
        }
    })
}

function addLevelClass() {
    function find(root, level) {
        root && root.childNodes &&
        root.childNodes.forEach((child) => {
            if (child.classList && child.classList.contains('folder')) {
                child.classList.add(`level-${level}`)

                if (
                    window.$docsify &&
                    window.$docsify.sidebarDisplayLevel &&
                    typeof window.$docsify.sidebarDisplayLevel === 'number' &&
                    level <= window.$docsify.sidebarDisplayLevel
                ) {
                    child.classList.add('open')
                }

                if (child && child.childNodes.length > 1) {
                    find(child.childNodes[1], level + 1)
                }
            }
        })
    }
    find(document.querySelector('.sidebar-nav > ul'), 1)
}

function renderStyle() {
    const style = `
  .sidebar-nav > ul > li ul {
    display: none;
  }
  
  .app-sub-sidebar {
    display: none;
  }
  
  .app-sub-sidebar.open {
    display: block;
  }
  
  .sidebar-nav .open > ul:not(.app-sub-sidebar),
  .sidebar-nav .active:not(.collapse) > ul {
    display: block;
  }
  
  /* 抖动 */
  .sidebar-nav li.open:not(.collapse) > ul {
    display: block;
  }
  
  .active + ul.app-sub-sidebar {
    display: block;
  }
  
  
  `;

    Docsify.dom.style(style);
}

init()

export default sidebarCollapsePlugin
