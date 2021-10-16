//// regular function

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }

//// arrow function 

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };


//// next example 
// const calcArea = radius => 3.14 * radius**2;
// const area = calcArea(5);
// console.log('area is: ' , area);

// // // next example 
// const greeting1 = function(){
//     return 'hello, world';    
// }
// console.log(greeting1())

// const greeting2 = () => 'hello, world';
// const result = greeting2();
// console.log(result);

//// long
// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

////shorten
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));