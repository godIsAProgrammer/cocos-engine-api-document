
export const init = (config, vm) => {
    const a = Docsify.dom.create('a', `<image class="go-to-top" src="/plugin/goToTop/top_02 (2).png" title="返回顶部"/>`);
    a.className = 'go-to-top-a';
    a.href = 'javascript:void(0);';
    a.addEventListener('click', function (e) {
        window.scrollTo(0,0);
    })
    Docsify.dom.find('.content').before(a);

    const style = `
        .go-to-top-a {
            display: inline-block;
            position: fixed;
            right: 270px;
            bottom: 20px;
            width: 40px;
            height: 40px;
            z-index: 2;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: 0px 1px #42b983;
        }

        .go-to-top{
            width: 100%;
        }
    
    `
    Docsify.dom.style(style)
}