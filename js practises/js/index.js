// const JohnWeight = +prompt('Johns wight...');
// const JohnHeight = +prompt('John height...');

// const JohnBMI = JohnWeight / JohnHeight ** 2;

// const BobWeight = +prompt('Bobs wight...');
// const BobHeight = +prompt('Bobs height...');
// const BobsBMI = BobWeight / BobHeight ** 2;

// if (JohnBMI < BobsBMI) {
//     console.log('Jonhs higher')
// } else if (JohnBMI === BobsBMI) {
//     console.log('Both of them are correct')
// } else {
//     console.log('Bobs higher')
// }

// const num1 = +prompt('son yozilsin')

// if (num1 > 0) {
//     console.log(num1 + 1)
// } else {
//     console.log(num1)
// }


// ikkinchisi


// const num2 = +prompt('son..');
// if (num2 > 0) {
//     console.log(num2 + 1)
// } else {
//     console.log(num2 - 2)
// }


// tortinchisi
// const number1 = +prompt('son1')
// const number2 = +prompt('son2')
// const number3 = +prompt('son3')
// if (number1 >= 0) {
//     console.log('birinchisi')
// }
// if (number2 >= 0) {
//     console.log('ikkinchisi')
// }
// if (number3 >= 0) {
//     console.log('uchinchisi')
// }


// oltinchisi

// const numb1 = +prompt('birinchi son')
// const numb2 = +prompt('ikkinchi son')
// if (numb1 > numb2) {
//     console.log('birinchisi kotta')
// } else {
//     console.log('ikkinchisi kotta');
// }

// sakkizinchi

// const birinchiSon = +prompt('birinchi son');
// const ikkinchiSon = +prompt('ikkinchi')

// if (birinchiSon > ikkinchiSon) {
//     console.log(birinchiSon + 'va' + ikkinchiSon)
// } else {
//     console.log(ikkinchiSon + 'va' + birinchiSon)
// }


// dars 28

// birinchi uyga vazifa


// const JohnWeight = +prompt('Johns wight...');
// const JohnHeight = +prompt('John height...');

// const JohnBMI = Math.round(JohnWeight / JohnHeight ** 2);

// const BobWeight = +prompt('Bobs wight...');
// const BobHeight = +prompt('Bobs height...');
// const BobsBMI = Math.round(BobWeight / BobHeight ** 2);

// if (JohnBMI < BobsBMI) {
//     console.log(`Johns BMI ${JohnBMI}  higher than Bobs ${BobsBMI} `)
// } else if (JohnBMI === BobsBMI) {
//     console.log('Both of them are correct')
// } else {
//     console.log(`Bobs BMI ${BobsBMI} higher than Johns ${JohnBMI}`)
// }


// ikkinchi uyga vazifa

// const age1 = +prompt('yoshingizni kiritin');
// const age2 = 18;
// const age3 = 60;

// if (age1 < year2) {
//     console.log('siz o'qishigiz kerak');
// } else if (age1 < age3) {
//     console.log(siz mehnat qilishingiz kerak);
// } else {
//     console.log(siz pensiya yoshidasiz pensiyani olib nevaralarizga ham berib turing);
// }


// dars 29 classwork

// const weekDays = +prompt('Xafta kunini kirgazing...')
// switch (weekDays) {
//     case 1:
//         console.log('Dushanba')
//         break;
//     case 2:
//         console.log('Seshanba')
//         break;
//     case 3:
//         console.log('Chor')
//         break;
//     case 4:
//         console.log('Pay')
//         break;
//     case 5:
//         console.log('Juma')
//         break;
//     case 6:
//         console.log('shanba')
//         break;
//     case 7:
//         console.log('Yakshanba')
//         break;
//     default:
//         console.log('unaqa kun yoq')
//         break;
// }


// const populationUzb = 35.23;
// const populations = populationUzb > 34.23 ? 'Ozbekiston ahoolisi ortachadan yuqori' : 'Ozbekisto aholisi ortachadan pas'
// console.log(populations);

let paras = 8;

function parametrs(params) {
    if (params % 2 == 0) {
        return 'true'
    } else {
        return 'false'
    }
}
console.log(parametrs(10));
console.log(parametrs(131));
console.log(parametrs(13));
console.log(parametrs(16));