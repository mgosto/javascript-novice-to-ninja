// object literal

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    
    /// OLD SYNTAX BELOW
    // login: function() {

    ///NEW SYNATX BELOW
    login(){
        console.log('the user logged in');
    },

    ///OLD
    // logout: function(){

    ///NEW
   logout(){
        console.log('the user logged out');
    },

    ///OLD
    // logBlogs: function(){

    ///NEW
    logBlogs(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })

    }
};

user.login();
user.logout();
user.logBlogs();

const name = 'mario';

console.log(this);