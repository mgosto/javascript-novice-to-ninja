// object literal

// const blogs = [
//     {title: 'why mac & cheese rules',
//     author: 'J.D. Salinger' ,
//     likes: 30},
//     {title: '10 things to make with marmite', 
//     author: 'Mark Twain',
//     likes: 50},
// ];

// console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'berlin',
    blogs: [
        {title: 'why mac & cheese rules',
        author: 'J.D. Salinger' ,
        likes: 30},
        {title: '10 things to make with marmite', 
        author: 'Mark Twain',
        likes: 50},
    ],
    login(){
        console.log('the user logged in');
    },
   logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })

    }
};

// user.login();
// user.logout();
user.logBlogs();

// const name = 'mario';

// console.log(this);