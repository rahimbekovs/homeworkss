const btn = document.querySelector('.menu__hamburger');
const menu = document.querySelector('.menu__bar');


btn.addEventListener('click', function() {
    menu.classList.toggle('block-class')

})