import { init as initComponent, update as updateComponent } from './component.js';

import { init as initSearch } from './search.js';

// 默认配置
const CONFIG = {
    placeholder: 'Type to search',
    // 空数据提示
    noData: 'No Results!',
    // 搜索的范围
    paths: 'auto',
    // 搜索的层级
    depth: 2,
    // 缓存最大时间
    maxAge: 86400000, // 1 day
    hideOtherSidebarContent: false,
    namespace: undefined,
    pathNamespaces: undefined,
}


const install = function (hook, vm) {
     const { util } = Docsify;
  const opts = vm.config.search || CONFIG;

  if (Array.isArray(opts)) {
    CONFIG.paths = opts;
  } else if (typeof opts === 'object') {
    CONFIG.paths = Array.isArray(opts.paths) ? opts.paths : 'auto';
    CONFIG.maxAge = util.isPrimitive(opts.maxAge) ? opts.maxAge : CONFIG.maxAge;
    CONFIG.placeholder = opts.placeholder || CONFIG.placeholder;
    CONFIG.noData = opts.noData || CONFIG.noData;
    CONFIG.depth = opts.depth || CONFIG.depth;
    CONFIG.hideOtherSidebarContent =
      opts.hideOtherSidebarContent || CONFIG.hideOtherSidebarContent;
    CONFIG.namespace = opts.namespace || CONFIG.namespace;
    CONFIG.pathNamespaces = opts.pathNamespaces || CONFIG.pathNamespaces;
  }

  const isAuto = CONFIG.paths === 'auto';

   

    hook.init(function() {
        // 初始化完成后调用，只调用一次，没有参数。
    });

    hook.beforeEach(function(content) {
        // 每次开始解析 Markdown 内容时调用
        // ...
        // console.log(content, 'contentcontentcontent');
        return content;
    });

    hook.afterEach(function(html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        // console.log(html, 'htmlhtmlhtmlhtml');
        next(html);
    });

    hook.mounted(_ => {
        // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
        initComponent(CONFIG, vm);
        !isAuto && initSearch(CONFIG, vm);
    });

    hook.doneEach(_ => {
        // 每次路由切换时数据全部加载完成后调用，没有参数。
        updateComponent(CONFIG, vm);
        isAuto && initSearch(CONFIG, vm);
    });

    hook.ready(function() {
        // 初始化并第一次加载完成数据后调用，没有参数。
    });



}

$docsify.plugins = [].concat(install, $docsify.plugins)