import sidebarCollapsePlugin from './sidebar-collapse-plugin.js'
import './sidebar-pin-plugin.js'

function install(...plugins) {
  if (!window.$docsify) {
    console.error('这是一个docsify插件，请先引用docsify库！')
  } else {
    $docsify.plugins = plugins.concat($docsify.plugins || [])
  }
}

install(sidebarCollapsePlugin)
