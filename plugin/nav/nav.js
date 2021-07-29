
export const init = (config, vm) => {
    render(config);
    const href = window.location.href;

    const type = href.match(/en\b|zh\b/)[0];

    // 初始化active状态
    [...document.getElementsByClassName('nav-item')].forEach(el => {
        const dataType =  el.getAttribute('data-code');
        if (dataType === type) {
            el.classList.add("nav-active");
        } 
    })

    // 监听语言切换
    Docsify.dom.find('.nav-wrap').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const href = window.location.href;
        const { target } = e;
        const dataType =  target.getAttribute('data-code');
        const a = href.replace(/en\b|zh\b/, dataType);
       
        [...document.getElementsByClassName('nav-item')].forEach(el => {
            el.className = 'nav-item';
        })
        
        target.classList.toggle("nav-active");

        window.location = a;
    })

};   

const render = (config) => {
    
    const mainEl = Docsify.dom.find('main');
    
    let str = '';
    if (Array.isArray(config)) {
        config.forEach(v => {
            const { title, url } = v;
            str += `<a class="nav-item" data-code="${v?.code}" title="${v.title}" href="#">${v?.title}</a>`;
        })
    }
    const navWrap = Docsify.dom.create('div', str);
    navWrap.className = 'nav-wrap';
    mainEl.appendChild(navWrap);

    renderStyle();
}


const renderStyle = () => {
    const style = `
        .nav-wrap{
            display: flex;
            position: fixed;
            right: 257px;
            top: 20px;
            z-index: 4;
        }

        .nav-item{
           display: inline-block;
           padding: 0 10px;
           text-align: center;
           font-size: 16px;
           line-height: 20px;
           color: #2d2d2d;
        }

        .nav-active{
            color: #42b983;
        }

        .en{
            content: '',
        }

        .cn{

        }
    `
    Docsify.dom.style(style);
}