// object literal

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user['email']);

// update age value 
user.age = 35;
console.log(user.age);

// update name value 
user['name'] = 'chun-li';
console.log(user['name']);

// update email value
user['email'] = 'chun-li@snail.io';
console.log(user['email']);

console.log(typeof user)