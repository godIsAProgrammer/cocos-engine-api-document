// import './sidebar-pin.css'

const PIN = 'DOCSIFY_SIDEBAR_PIN_FLAG'

function init() {
  // 响应式尺寸 @media screen and (max-width: 768px)
  renderStyle();
  if (document.documentElement.clientWidth > 768) return

  localStorage.setItem(PIN, false)

  // 添加覆盖标签
  const btn = document.createElement('button')
  btn.classList.add('sidebar-pin')
  btn.onclick = togglePin
  document.body.append(btn)

  window.addEventListener('load', () => {
    const content = document.querySelector('.content')

    // 点击内容区域收起侧边栏
    document.body.onclick = content.onclick = (e) => {
      if (e.target === document.body || e.currentTarget === content) {
        if (localStorage.getItem(PIN) === 'true') {
          togglePin()
        }
      }
    }
  })
}

function togglePin() {
  let pin = localStorage.getItem(PIN)
  pin = pin === 'true'
  localStorage.setItem(PIN, !pin)
  if (pin) {
    document.querySelector('.sidebar').style.transform = 'translateX(0)'
    document.querySelector('.content').style.transform = 'translateX(0)'
  } else {
    document.querySelector('.sidebar').style.transform = 'translateX(300px)'
    document.querySelector('.content').style.transform = 'translateX(300px)'
  }
}


function renderStyle() {
  const style = `
  
  @media screen and (max-width: 768px) {
    /* 移动端适配 */
    .markdown-section {
      max-width: none;
      padding: 16px;
    }
    /* 改变原来按钮热区大小 */
    .sidebar-toggle {
      padding: 0 0 10px 10px;
    }
    /* my pin */
    .sidebar-pin {
      appearance: none;
      outline: none;
      position: fixed;
      bottom: 0;
      border: none;
      width: 40px;
      height: 40px;
      background: transparent;
    }
  }
  
  
  `;

  Docsify.dom.style(style)
}

init()
