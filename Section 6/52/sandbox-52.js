const article = document.querySelector('article');


// //this is an HTML Collection
// console.log(article.children);

// //this converts the HTML collection into an Array 
// console.log(Array.from(article.children));



// Array.from(article.children).forEach(child=>{
//     child.classList.add('article-element');
// })

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

function squareNum(num){
    return num*num;
};
squareNum(10);
squareNum(52);