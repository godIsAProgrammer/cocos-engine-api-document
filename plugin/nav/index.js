import { init } from "./nav.js";

// 默认配置
const CONFIG = {};

const install = function (hook, vm) {
	// 获取配置
	const config = vm.config.nav ?? CONFIG;
    
	hook.mounted(_ => {
        // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
        init(config, vm)
    });

    hook.doneEach(_ => {
        // 每次路由切换时数据全部加载完成后调用，没有参数。
        // init(config, vm)
    });

    hook.ready(function() {

       // 初始化并第一次加载完成数据后调用，没有参数。
    });
}


$docsify.plugins = [].concat(install, $docsify.plugins);