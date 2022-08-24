const iconMenu = document.getElementById('icon-menu');
const close = document.getElementById('close');
const ulMenu = document.querySelector('.ul-menu');
const opacity = document.getElementById('opacity');

const smallImg = document.querySelectorAll('.four-img-self img');
const mainImg = document.querySelector('.left > img');

const showImg = document.querySelector('.show-img');

const smallImgShadow = document.querySelectorAll('.four-img-self-shadow img')
const mainImgShadow = document.getElementById('main-img-shadow')

const prevMobile = document.getElementById('prev-mobile');
const nextMobile = document.getElementById('next-mobile');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const closeShadow = document.getElementById('close-shadow');

let orderMobileImg = 0;

iconMenu.addEventListener('click', () => {
    ulMenu.style.width = '200px';
    opacity.style.display = 'block';
})

close.addEventListener('click', () => {
    ulMenu.style.width = '0';
    opacity.style.display = 'none';
})

smallImg.forEach((item, i) => {
    item.addEventListener('click', () => {
        change_small_img(smallImg, item);
        change_small_img(smallImgShadow, smallImgShadow[i]);

        mainImg.src = item.src;
    })
})

smallImgShadow.forEach(item => {
    item.addEventListener('click', () => {
        change_small_img(smallImgShadow, item);
    })
})

nextMobile.addEventListener('click', () => {
    change_order(1, 4, 0,);

    mainImg.src = smallImg[orderMobileImg].src;
})

prevMobile.addEventListener('click', () => {
    change_order(-1, -1, 3);

    mainImg.src = smallImg[orderMobileImg].src;
})

next.addEventListener('click', () => {
    change_order(1, 4, 0);
})

prev.addEventListener('click', () => {
    change_order(-1, -1, 3);
})

mainImg.addEventListener('click', () => {
    if (window.innerWidth > 420) {
        opacity.style.display = 'block';
         showImg.style.display = 'flex';
    }
})

closeShadow.addEventListener('click', () => {
    opacity.style.display = 'none';
    showImg.style.display = 'none';
})

function change_small_img(type, item) {
    type.forEach(item => {
        if (item.matches('.small-img-active')) {
            item.classList.remove('small-img-active');
        }
    })
    item.classList.add('small-img-active');
    mainImgShadow.src = item.src;
}

function change_order(a, b, c) {
    orderMobileImg += a;
    if (orderMobileImg === b) {
        orderMobileImg = c;
    }

    change_small_img(smallImgShadow, smallImgShadow[orderMobileImg]);
}

function add_number() {
    let number = document.getElementById('count-number').textContent;
    number ++;
    document.getElementById('count-number').textContent = number;
}

function minus_number() {
    let number = document.getElementById('count-number').textContent;
    if (number > 0) {
      number --;
      document.getElementById('count-number').textContent = number;        
    }

}