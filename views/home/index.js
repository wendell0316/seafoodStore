const leftDom = document.querySelector('.content .left');
leftDom.addEventListener('click', (e) => {
    const allItems = [...leftDom.children];
    for (const item of allItems) {
        item.classList.remove('act-classify');
    }
    if (e.target.className === 'left-item') {
        e.target.classList.add('act-classify')
    }
})