import Handlebars  from 'handlebars';
import fs from 'fs';
import path from 'path';

import { 
    parseSidebarJson, 
    mkdirByTemp, 
    removeDir, 
    fileDisplay 
} from './utils.js';

// 删除旧的文件夹及文件
removeDir('docs');

// 读取 模板
const tempFilesName = fs.readdirSync('templates/')
let registerPartialTemp = {};
tempFilesName.forEach(v => {
    const name = v.split('.')[0]
    registerPartialTemp[name] = fs.readFileSync(`templates/${v}`, 'utf-8');
})

// 注册模板
Handlebars.registerPartial(registerPartialTemp);

// 注册模板函数
Handlebars.registerHelper({
    isClass: function(conditional, options) {
        return conditional === 'Classes'
    },
    isFunction: function(conditional, options) {
        return conditional === 'Classes'
    },
    isConstructors: function(conditional, options) {
        return conditional === 'Constructors'
    },
    isProperties: function(conditional, options) {
        return conditional === 'Properties'
    },
    isAccessors: function(conditional, options) {
        return conditional === 'Accessors'
    },
    isMethods: function(conditional, options) {
        return conditional === 'Methods'
    },
    isExample: function(conditional, options) {
        return conditional === 'example'
    },
    isReferences: function(conditional, options) {
        return conditional === 'References'
    },
    // 处理 function 参数展示
    eachArg: function (conditional, options) {
        let content = '';
        conditional?.forEach(( el, i ) => {
            let type;
            if (el.type.types) {
                type = el.type.types.map(v => {
                    let s;
                    if (v.elementType) {
                        s = `${v.type}\<${v.elementType?.name}\>`;
                    } else {
                        s = v.name
                    }

                    return s;

                }).join(' | ')

            } else {
                type = el.type.name
            }
            content = content + `${el?.name}: ${type}${i === (conditional.length -1) ? '' : ', '}`
        
        });
        return content;
    },
    eachType: function (conditional) {
        const { typeArguments, name } = conditional;
        let str = '';

        if (typeArguments) {
            str = typeArguments?.map(v => v.name).join(',');
        } else {
            str = name;
        }

        return str

    },
    // 转义字符
    filterEscapes: function (conditional, options){
        const arrEntities={'lt':'<','gt':'>','nbsp':'','amp':'&','quot':'"'};
        const txt = conditional?.replace(/&(lt|gt|nbsp|amp|quot);/ig, (all, t) =>  arrEntities[t]);
        return txt?.replace(/\`\`\`ts|\`\`\`/g, '');
    },
    // 过滤转义字符
    replaceEscapes: function (conditional, options){
        return conditional?.replace(/\n/g, '');
    },
    isValue: function (conditional) {
        return (conditional && conditional !== "");
    },
    handleWidthFilePath: function (conditional, options) {
        const dirPath = conditional?.replace(/\//g,'-');
        return `/${dirPath}/${dirPath}-intro.md`;
    },
    // property type
    propertyType: function (conditional) {
        if (conditional) {
            const { name, types, elementType, type } = conditional;
            let typeStr;
            if (types) {
                typeStr = types?.filter(v => {
                    return v.name !== 'undefined'
                }).map(v => v?.name).join(' | ');
            } else if (name) {
                typeStr = name;
            } else if (elementType) {
                typeStr = type;
            }
            return (typeStr && typeStr !== '') ? `\`${typeStr}\``: '';
        }
    },
    // static 属性排最前面
    sortStatic: function (conditional) {
         const children = conditional?.children.sort((a, b) => {
            if (a.flags.isStatic ) {
                return -1
            } else {
                return 1
            }
            return a - b;
        })
        return {...conditional, children}
    },
    eachMethodType: function (conditional) {

        if (conditional) {
            const { name, types } = conditional;
            let typeStr;

            if (types) {
                typeStr = types.map(v => {
                    let s;
                    if (v.elementType) {
                        s = `${v.type}\<${v.elementType?.name}\>`;
                    } else {
                        s = v.name
                    }

                    return s;

                }).join(' | ')

            } else {
                typeStr = name;
            }

            return (typeStr && typeStr !== '') ? `\`${typeStr.replace(/\|/g, '\\\|')}\``: '';
        }
    }
});


// 读取 api json文件
const apiJson = JSON.parse(fs.readFileSync(path.resolve('API-json/Cocos-Creator-API.json'), 'utf-8'));

// 生成侧边栏
const sidebarTemplate = fs.readFileSync(path.resolve('templates/sidebar.hbs'),  'utf-8')
const sidebar = Handlebars.compile(sidebarTemplate);

// 检查当前目录中是否存在该文件夹。
fs.access(path.join('docs'), fs.constants.F_OK, (err) => {
    if (err) {
        fs.mkdirSync(path.join('docs'),{ recursive: true }, (error) => {
            if (error) throw error;
        })
    }
});

['en', 'zh'].forEach(v => {
    const sidebarJson =  parseSidebarJson(apiJson, v);
    // 检查当前目录中是否存在该文件夹。
    fs.access(path.join(`docs/${v}`), fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(path.join(`docs/${v}`), { recursive: true }, (error) => {
                if (error) throw error;
            })

            fs.writeFileSync(path.join(`docs/${v}/_sidebar.md`), sidebar({sidebarConfig: sidebarJson}))

        }
    });
})

// 生成模块文件夹及文件
mkdirByTemp(apiJson, Handlebars);

//解析需要遍历的文件夹
// var filePath = path.resolve('docs');

//调用文件遍历方法
// fileDisplay(path.join('docs'));


// setTimeout(fileDisplay(path.join('docs')), 10000)

