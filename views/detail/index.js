// 图片变化
const maxImgLength = $('.item').length;
let index = 0,
    mourseStartX;

function changeImg(index) {
    $('.item')
        .eq(index)
        .fadeIn()
        .siblings()
        .fadeOut();

    $('.img-position')[0].innerText = `${index + 1}/${maxImgLength}`;
}
function handleIndex(type = 'add') {
    if (type === 'add') {
        index++;
        if (index === maxImgLength) {
            index = 0;
        }
    } else {
        index--;
        if (index === -1) {
            index = maxImgLength - 1;
        }
    }
    changeImg(index);
}
changeImg(0);
function autoPlay() {
    timer = setInterval(function() {
        handleIndex();
    }, 3000);
}

autoPlay();
// 停止事件
const contentDom = document.querySelector('.contain_inner');
contentDom.addEventListener('touchstart', e => {
    mourseStartX = e.changedTouches[0].clientX;
    clearInterval(timer);
});
contentDom.addEventListener('touchmove', e => {
    if (mourseStartX === null) {
        return;
    }
    let moveDistance = e.changedTouches[0].clientX - mourseStartX;
    if (moveDistance > 15) {
        handleIndex('sub');
        mourseStartX = null;
    } else if (moveDistance < -15) {
        handleIndex();
        mourseStartX = null;
    }
});
contentDom.addEventListener('touchend', () => {
    autoPlay();
});

const modalDom = document.querySelectorAll('.modal');
const bottomDom = document.querySelector('.bottom');
const centerDom = document.querySelector('.center');


modalDom[0].addEventListener(
    'click',
    e => {
        console.log(e)
        if (e.target.nodeName === e.currentTarget.nodeName) {
            closeModal('bottom');
            closeModal('center');
        }
    },
    true
);
modalDom[1].addEventListener(
    'click',
    e => {
        console.log(e)
        if (e.target.nodeName === e.currentTarget.nodeName) {
            closeModal('bottom');
            closeModal('center');
        }
    },
    true
);


function openModal(type = 'bottom') {
    if (type === 'bottom') {
        bottomDom.style.display = 'flex';
    } else {
        centerDom.style.display = 'flex';
    }
}
function closeModal(type = 'bottom') {
    if (type === 'bottom') {
        bottomDom.style.display = 'none';
    } else {
        centerDom.style.display = 'none';
    }
}

