// dars31


// birinchi vzifa


// const form = document.querySelector('.form'),
//     summa = document.querySelector('.summa'),
//     dollar = document.querySelector('.dollar'),
//     yevro = document.querySelector('.yevro'),
//     yuan = document.querySelector('.yuan'),
//     btn = document.querySelector('.btn'),
//     title = document.querySelector('.title'),
//     selects = document.getElementById('selects');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (selects.value === 'dollar') {
//         title.textContent = summa.value * 11000 + ' somda'
//     } else if (selects.value === 'yevro') {
//         title.textContent = summa.value * 12000 + ' somda'
//     } else if (selects.value === 'yuan') {
//         title.textContent = summa.value * 128.44 + ' somda'
//     } else {
//         title.textContent = 's'
//     }
// })


// ikkinchi vazifa


// const form2 = document.querySelector('.form2'),
//     kun = document.querySelector('.kun'),
//     kun__btn = document.querySelector('.kun-btn'),
//     kun__text = document.querySelector('.kun__text');

// form2.addEventListener('submit', function(e) {
//     e.preventDefault();
//     switch (kun.value) {
//         case '1':
//             kun__text.textContent = 'Dushanba';
//             break;
//         case '2':
//             kun__text.textContent = 'Seshanba'
//             break;
//         case '3':
//             kun__text.textContent = 'Chorshanba'
//             break;
//         case '4':
//             kun__text.textContent = 'Payshanba'
//             break;
//         case '5':
//             kun__text.textContent = 'Juma'
//             break;
//         case '6':
//             kun__text.textContent = 'Shanba'
//             break;
//         case '8':
//             kun__text.textContent = 'Yakshanba'
//             break;
//         default:
//             kun__text.textContent = 'Iltimos 1 dan 7 gacha bolgan sonlarni kiritng'
//             break;
//     }
// })


// uchinchi vazifa


const pattern = /^\d{5}-\d{3}-\d{2}-\d{2}/;
const nomer = '99899-825-50-06'

console.log(pattern.test(nomer));