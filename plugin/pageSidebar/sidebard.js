/**
 * @description 初始化
 * @param {*} config 
 * @param {*} vm 
 */
export const init = function (config, vm) {
 
    const tableOfContent = document.querySelector('.table-of-content');
    
    if (tableOfContent) {
        const d = tableOfContent.cloneNode(true)
        d.className = 'page-sidebar-wrap';
        Docsify.dom.find('.content').appendChild(d);
        renderStyle(); 
    } else {
        const d = document.querySelector('.page-sidebar-wrap');
        if (d) Docsify.dom.find('.content').removeChild(d);
    }

   
   
}

const renderStyle = () => {
    const style = `
    .page-sidebar-wrap{
        position: fixed;
        right: 0;
        top: 20px;
        bottom: 20px;
        width: 246px;
        height: 97%;
        background: #fff;
        border: 1px solid #dededede;
        z-index: 1;
        border-radius: 8px;
        overflow-y: scroll;
        
    }

    .page-sidebar-wrap>h2, .page-sidebar-wrap>h3{
        text-align: center;
    }

    .page-sidebar-wrap>ul>li>a{
        color: #2d2d2d;
    }

    .markdown-section{
        padding-right: 246px;
    }
    `;

    Docsify.dom.style(style);
}