const user = {
    name: "Nanak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from User");
        // console.log(`UserName: ${name}`)  // reference error 
        console.log(`Username: ${this.name}`)
        console.log(this)
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());

// console.log(this)  // {} because no global object present in node.js but it return window object in browser console


function User(userName, loginCount, isLoggedIn){
    this.userName = userName,     //without using this keyword it return undefined error or TypeError (all 3)
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting= function(){
        console.log(`Welcome ${this.userName}`)
    }

    return this;    // not necessary  it defined implicitily
}

// const user1 = User("Nanak", 10, true);
// const user2 = User("Pankhuri", 15, true); // this override the user1 value and return to console.log(user1) => it create problem
// console.log(user1);


const user1 = new User("Nanak", 10, true);
const user2 = new User("Pankhuri", 12, true);
console.log(user1);
console.log(user2);
console.log(user1.constructor)    // [Function: User]

// new keyword is used as Constructor. It help to construct new instances or object
// new keyword call constructor function. it return all arguments etc. and return it 
// this keyword inject the arguments in variables etc.
// then return to function 

// check a method 'instanceof' for user1 and user2 they both will different