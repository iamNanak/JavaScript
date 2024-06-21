// There are two ways to declare objects => 1. Literals  2. Constructor
// Singleton => Any constructor is formed then an singleton object is formed. It is own kind of an object. When we declare object in literals then singleton is not formed.

Object.create     //this is creating object is formed using Constructor Method

//Object Literals
const mySym = Symbol("Key1")

const JsUser = {
    name: "Nanak",//here 'name' is treated like string by Js but we dont write it as string
    "full Name":"Nanak Gupta",
    mySym: "myKey1", //Symbol is not access like this (datatypes is not symbol)
    [mySym]: "myKey1", //Now, it is using as symbol data types
    age: 20,
    location: "Varanasi",
    email: "nanak@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);   //it can be access like this but it is not a right way
console.log(JsUser["email"]);
console.log(JsUser["full Name"])   //it can't be access by using '.' 
console.log(typeof JsUser.mySym)  // o/p=> string
console.log(typeof JsUser[mySym])   // o/p=> string
console.log(JsUser);                // from this output its show the symbol

JsUser.email = "iamnanak@google.com";
// Object.freeze(JsUser);   // freeze method is used to avoid any unwanted change in object
// JsUser.email = "iamnanak@chatgpt.com";  //this change will not reflect
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello, Js User ${this.name}`)   // this is used to give refernce to same object
}

console.log(JsUser.greeting);  // o/p=> [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());