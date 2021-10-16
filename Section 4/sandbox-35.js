// // callback & foreach

// const myFunc = (callbackFunc) => {
// 	// do something
// 	let value = 50;
// 	callbackFunc(value);
// };

// myFunc(value => {
//     // do something
//     console.log(value);
// });

let folks = [`johnny`, `jimmy`, `jackson`, `jameson`, `jonathan`]

let people = [`mario`, `luigi`, `ryu`, `shaun`, `chun-li`]

// people.forEach((person, index) => {
//     console.log(index, person);
// });

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
};

people.forEach(logPerson);
folks.forEach(logPerson);