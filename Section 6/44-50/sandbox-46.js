
//EXAMPLE 1
// const para = document.querySelector('.error');

// console.log(para);

//EXAMPLE 2
// const para = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');

// console.log(para);

//EXAMPLE 3
const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para)
});

// console.log(paras[0]);

//EXAMPLE 4

const errors = document.querySelectorAll('.error');

errors.forEach(error => {
    console.log(error);
});

// console.log(errors[0]);