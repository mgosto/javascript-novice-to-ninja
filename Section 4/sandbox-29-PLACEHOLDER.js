// variables & block scope

const age = 30;
const name = 'Jim';
if(true){
    const age = 40;
    const name = 'Shaun';
    console.log('inside 1st code block: ' , age, name);
    if (true) {
        const age = 50;
        const name = 'Sam';
        console.log('inside 2nd code block: ', age, name); 
    }

}

console.log('outside code block: ' , age, name);