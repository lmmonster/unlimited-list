const e = sel => document.querySelector(sel)

const log = console.log.bind(console)

function node() {
    const template = `<div class='block green'></div>`
    const node = document.createElement('div')
    node.innerHTML = template
    return node.firstChild
}

function bindEvent() {
    const list = e('#list')
    list.addEventListener('scroll', () => {
        // scrollTop: 元素垂直方向滚动的长度，通俗地讲就是就是滑动地时候，滚出视图地长度
        // 滚出视图长度最长为，scrollHeight - offsetHeight，因为假如滚出最长为scrollHeight，那么整个内容都会滚出去，最后一定会有一部分保留
        // offsetHeight: 元素高度，不包括溢出部分
        const h = list.scrollTop + list.offsetHeight

        // scrollHeight: 元素高度，包括溢出部分
        if (h >= list.scrollHeight) {
            const childNew = node()
            list.appendChild(childNew)
        }
    })
}

function __main() {
    bindEvent()
}

__main()
