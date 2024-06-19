// Primitive Data Types -> Here, copy of the data is created and given to perform operation on it. 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a Dynamic typed
const score = 100;
const scoreValue = 100.3;           //there no such thing like float and double, all are considers as number.

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherID = Symbol('123');
// console.log(id === anotherID);  //false   Since, both denoted by same  strings but they are not same. Symbol provide uniqueness.

const bigNumber = 7895456512329878532n

// Non- Primitive (Reference) Types -> Here, direct reference of the data is given (NOT COPY) to perform operations on it.
// Arrays, Object, Functions.

//array 
const heros = ["Iron Man", "Batman", "Superman", "Wolverine"];

//Object 
let myObj = {
    name: "Nanak",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello, World!!");
}
//console.log(myFunction)

// **************************************************************************************
 // Stack memory (Primitive Data Types) and Heap Memory (Non-Primitive Data Types)

let userName = "i_am_Nanak";

let myName = userName;  //here copy of data i.e. copy of userName is assign to myName
console.log(myName);

myName = "Nanak";
console.log(userName)
console.log(myName);


let userOne = {
    email: "userOne@google.com",
    upi: "userOne@ybl"
}

let userTwo = userOne   // here no copy of data is assign instead actual data refernce is given 

userTwo.email="Nanak@google.com"

console.log(userOne.email);  //Output => Nanak@google.com
console.log(userTwo.email);  //Output => Nanak@google.com