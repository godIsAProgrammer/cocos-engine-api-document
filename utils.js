import fs from 'fs';
import path from 'path';
import marked from 'marked';
const SHOW_TYPE = ['Class', 'Classes', 'Functions', 'Function', 'Interface'];
let langType = [];

/**
 * @description 生成sidebar所需数据
 * @param { Object } dataJson
 * @param { string } lang
 */
export const parseSidebarJson = (dataJson, lang) => {
    const { children, name, id, kind, flags, originalName } = dataJson;
    let sidebarConfigArr = [];
    let sidebarItemConfig = {
        name,
        id,
        kind,
        flags,
        originalName,
        url: `/docs/${lang}/README.md`
    }
    if (children && children.length > 0) {
        const a = []
        children.forEach(v => {
            if (v.kindString === 'Module' && !isHidden(v.comment?.tags)) {
                const resolveModuleName =  v.name.replace(/\//g,'-');
                const modulePath = `docs/${lang}/${resolveModuleName}`;
                const moduleUrl = `${modulePath}/${resolveModuleName}-intro.md`;

                let c = {
                    name: v.name,
                    Function: [],
                    Class: [],
                    Interface: [],
                    url: moduleUrl
                };

                v.children.forEach(item => {
                    const subKindStr = item.kindString;
                    const subUrl = `${modulePath}/${subKindStr}/${item.name}.md`;
                    if (SHOW_TYPE.indexOf(item.kindString) !== -1 && !isPrivate(item)) {
                        c[item.kindString].push({...item, url: subUrl})
                    }

                });

                if (c?.Function.length > 0 || c.Class.length > 0 || c.Interface.length > 0) a.push(c);
            }
        })

        sidebarItemConfig.children = a;

    }
    sidebarConfigArr.push(sidebarItemConfig);
    return sidebarConfigArr;
}

/**
 * @description 生成文件夹及文件
 * @param dataJson
 * @param Handlebars
 */
// @TODO 需优化
export const mkdirByTemp = (dataJson, Handlebars) => {
    const { children } = dataJson;
    // 检查当前目录中是否存在该文件夹。
    fs.access(path.join('docs'), fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdir(path.join('docs'),{ recursive: true }, (error) => {
                if (error) throw error;
            })

            // 获取多语言信息
        children[0]?.comment?.tags?.forEach(v => {
            const { tag } = v;
            if (tag) {
                const langPath = `docs/${tag}`;
                // 创建首页数据
                const readMeDataJson = createDataJson(dataJson);

                //读取首页模板
                const readMeTepFile = fs.readFileSync('templates/readMe.hbs',  'utf-8');

                // 注册模板
                const readMeTep = Handlebars.compile(readMeTepFile);

                readMeDataJson.filePath = langPath

                // 创建 module 介绍页
                fs.writeFileSync(`${langPath}/README.md`, readMeTep({ data: { ...readMeDataJson, filePath: langPath }}));

                // 检查当前目录中是否存在该文件夹。
                fs.access(path.join(langPath), fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.mkdir(path.join(langPath),{ recursive: true }, (error) => {
                            if (error) throw error;
                        })
                    }
                });

                if ( langType?.indexOf(tag) < 0 ) {
                    langType.push(tag);
                }

                // 创建module及module下的文件
                createModules(children, tag, Handlebars)
            }

        });
        }

       const c = fileDisplay(path.join('docs'));
       fs.writeFileSync('plugin/search/search.json', JSON.stringify(c));
       fs.writeFileSync('plugin/search/searchData.js', JSON.stringify(c));
    //    console.log(c, 'cccc');
    });


}

/**
 * @description 创建module及module下的文件
 * @param { Array } children
 * @param { string } langTag 语言标识 例如 en 或者 zh
 * @param { Handlebars } Handlebars
 * @returns void | []
 */
export const createModules = (children, langTag, Handlebars) => {
    if (!Array.isArray(children) && children.length <= 0) return [];
    const langPath = `docs/${langTag}`;
    const classArray = [];
    const interfaceArray = [];

    children.forEach(item => {
        if ( item.kindString === 'Module' ) {
            item.children.forEach(value => {
                const { kindString } = value;
                const p = item.name.replace(/\//g, '-');
                const folderPath = `${langPath}/${p}/${kindString}`;
                const filePath = `${folderPath}/${value.name}.md`;
                if (kindString === 'Class') {
                    classArray.push({...value, filePath})
                }

                if (kindString === 'Interface') {
                    interfaceArray.push({...value, filePath});
                }
            })
        }

    })

    children.forEach(item => {
        const { kindString } = item;
        if ( kindString === 'Module' ) {
            const dir = item.name.replace(/\//g, '-');
            const introPath = `${langPath}/${dir}/${dir}-intro.md`;
            // 创建文件目录
            fs.mkdirSync(`${langPath}/${dir}`, { recursive: true });

            // 生成 module所需json数据
            const moduleJson = createDataJson(item, langTag);
            moduleJson.groups = moduleJson.groups.filter((v, i) => {
                const a = { Classes: 'Class', Functions: 'Function' };
                moduleJson.groups[i].filePath = `${langPath}/${dir}/${a[v.title]}`;
                return SHOW_TYPE.indexOf(v.title) !== -1;
            });

            // 读取 module 模板文件
            const moduleTepFile = fs.readFileSync('templates/modules.hbs',  'utf-8');
            // 注册模板
            const moduleTep = Handlebars.compile(moduleTepFile);

            // 创建 module 介绍页
            fs.writeFileSync(introPath, moduleTep({data: {...moduleJson, filePath: `${langPath}/${dir}/`}}));

            // 创建 class、function md文件
            item.children.forEach(v => {
                const p = item.name.replace(/\//g, '-');
                const folderPath = `${langPath}/${p}/${v.kindString}`;
                const filePath = `${folderPath}/${v.name}.md`;

                if (SHOW_TYPE.indexOf(v.kindString) !== -1) {

                    fs.mkdirSync(folderPath, { recursive: true })

                    // 写入文件
                    switch (v.kindString) {
                        case 'Class':
                            // 生成class模板所需要的json数据
                            const classData = createDataJson(v, langTag);
                            
                            classData['groups'] = classData.groups?.sort((a, b) => {
                                if(a.title === 'Properties') {
                                    return -1;
                                } else {
                                    return 1;
                                }
                            });

                            // 读取 class 模板文件
                            const classTepFile = fs.readFileSync('templates/class.hbs',  'utf-8');
                            // 注册模板
                            const classTep = Handlebars.compile(classTepFile);
                            classData.filePath = filePath;

                            if (classData?.extendedTypes) {
                                const extendedTypes = classData?.extendedTypes?.map(v => {
                                    let source = {};
                                    let types;

                                    if (v?.id) {
                                        [...classArray, ...interfaceArray].forEach(fv => {
                                            if (v.id === fv.id) {
                                                source = fv
                                            }
                                        })

                                    }

                                    if(v?.types) {
                                        let typeSource = {};
                                        const typesList = v?.types?.filter(v => {
                                            return v?.id;
                                        })

                                        types = typesList.map(v => {

                                            [...classArray, ...interfaceArray].forEach(fv => {
                                                if (v.id === fv.id) {
                                                    typeSource = fv
                                                }

                                            })

                                            return {
                                                ...v,
                                                source: typeSource
                                            }
                                        })

                                    }

                                    return {
                                        ...v,
                                        source,
                                        types
                                    }
                                })

                                classData.extendedTypes = extendedTypes;

                            }

                            fs.writeFileSync(filePath, classTep({classData}));
                            break;
                        case 'Function':
                            // 读取 function 模板文件
                            const functionTepFile = fs.readFileSync('templates/function.hbs',  'utf-8');
                            const functionTep = Handlebars.compile(functionTepFile);
                            const signatures = v?.signatures.map(sItem => {
                                return {...sItem, comment: filterCommentTag(sItem.comment, langTag)}
                            })
                            fs.writeFileSync(filePath, functionTep({data: {...v, signatures}}));
                            break;
                        case 'Interface':
                            // if (v.children) {}
                            const interfaceTepFile = fs.readFileSync('templates/interfaces.hbs',  'utf-8');
                            const interfaceTep = Handlebars.compile(interfaceTepFile);
                            fs.writeFileSync(filePath, interfaceTep({data: {...v}}));
                            break;

                        default:
                            break;
                    }
                }
            })
        }
    })
}

/**
 * @description 索引groups中的数据
 * @param { Object } dataJson
 * @param { string } langTag 语言标识 例如 en 或者 zh
 * @returns {groups: *[], comment: {}}
 */
export const createDataJson = (dataJson, langTag) => {
    if (!dataJson) return;
    let concatArray = [];
    const groups = [];

    dataJson?.groups?.forEach(gItem => {
        const { title } = gItem;
        const children = dataJson.children.filter(cItem => {
            return ( gItem.children.indexOf(cItem.id) !== -1 ) && !isPrivate(cItem) && !isHidden(cItem?.comment?.tags);
        })

        const c = children.map(v => {
            const { kindString } = v;
            const d = { ...v };

            if (kindString === 'Method') {
                d.signatures = d.signatures.map(sValue => {
                    return {...sValue, comment: filterCommentTag(sValue?.comment, langTag)}
                })
            }

            return {...d, comment: filterCommentTag(v.comment, langTag)}
        }).sort(( a, b ) => {
            if (a?.flags?.isStatic ) {
                return -1
            } else {
                return 0
            }
        })

        const r = {
            ...gItem,
            children: c
        }

        // groups.push(r);
        if (
            title !== 'Accessors'
            && title !== 'Properties'
            && title !== 'Namespaces'
            && title !== 'Interfaces'
            && title !== 'Type aliases'
            && title !== 'Enumerations'
        ) {
             groups.push(r);
        } else if ( title === 'Accessors' || title === 'Properties' ) {
            concatArray = [ ...concatArray, ...c ]
        }

    })

    if (concatArray.length > 0) {
        groups.push({
            title: 'Properties',
            children: concatArray.sort(( a, b ) => {
                if (a?.flags?.isStatic ) {
                    return -1
                } else {
                    return 0
                }
            })
        })
    }

    return {
        ...dataJson,
        comment: filterCommentTag(dataJson.comment, langTag),
        groups
    };
}


/**
 * @description
 * @param { Object } commentTag
 * @param { string } langTag
 * @returns
 */
export const filterCommentTag = ( commentTag, langTag ) => {
     let comment = { ...commentTag };

    if (commentTag?.tags) {
        comment['tags'] = commentTag.tags.filter(tagItem => {
            if (langTag === 'en') {
                return tagItem.tag !== 'zh';
            } else {
                return tagItem.tag !== 'en';
            }
        });
    }

    return comment;
}

/**
 * @description 从tag上判断模块是否可见
 * @param { Array } tags
 */
export const isHidden = (tags) => {
    let flag = false;
    if (!Array.isArray(tags)) return flag;

    for (let i = 0; i < tags.length; i++) {
        flag = tags[i]?.tag === 'hidden';
        if (flag) break;
    }

    return flag;
}

/**
 * @description 从flag和名称上判断前缀带_为私有 方法、属性
 * @param { Object } item
 */
export const isPrivate = (item) => {
    const { flags, name  } = item;
    return flags ? ( flags?.isProtected || flags?.isPrivate || /\_/.test(name) ) : false;
}
/**
 * 删除文件夹及下文件
 * @param { string } dirPath 文件夹路径 
 */
export const removeDir = ( dirPath ) => {
    if ( fs.existsSync( dirPath) ) {
        const files = fs.readdirSync(dirPath)
    
        for(let i = 0; i < files.length; i++ ){
          const newPath = path.join(dirPath, files[i]);
          const stat = fs.statSync(newPath)
          if(stat.isDirectory()){
            //如果是文件夹就递归下去
            removeDir(newPath);
          }else {
           //删除文件
            fs.unlinkSync(newPath);
          }
        }
    
        fs.rmdirSync(dirPath)//如果文件夹是空的，就将自己删除掉
    }
    return;
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
 let filesObject = {
     en: {},
     zh: {}
 };
 let langKey;
 export const fileDisplay = ( filePath ) => {
    fs.existsSync(filePath)
    // 根据文件路径读取文件，返回文件列表
    const fileList = fs.readdirSync(filePath);
    fileList?.forEach((filename) => {
        if (filename === 'en' || filename === 'zh' ) langKey = filename;
        // if (filename === 'zh') console.log(filename);
        //获取当前文件的绝对路径
        const fileDir = path.join( filePath, filename );
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        const fileStat = fs.statSync(fileDir);
        //是文件
        const isFile = fileStat?.isFile();
        //是文件夹
        const isDir = fileStat?.isDirectory();
        if ( isFile ){
            const key = '/' + fileDir?.split('.')[0];
            // const html = marked(fs.readFileSync(fileDir, 'utf-8'));
            // console.log(html, 'cccc');
            const body = marked(fs.readFileSync(fileDir, 'utf-8'))
                .replace(/\n/g, '')
                .replace(/<!-- {docsify-ignore} -->/, '')
                .replace(/{docsify-ignore}/, '')
                .replace(/<!-- {docsify-ignore-all} -->/, '')
                .replace(/{docsify-ignore-all}/, '')
                .trim();
            const slug = '#' + key;
            const titleArray = key?.split('/');
            const len  = titleArray.length;
            const title = titleArray[len - 2] + ': ' + titleArray[len -1];
            console.log(langKey, '[[[[[');
            filesObject[langKey][key] = {
                body,
                slug,
                title,
            }
        }
        if ( isDir ){
            fileDisplay(fileDir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    })
    filesObject['searchIndex'] = '/';
    return filesObject
}


