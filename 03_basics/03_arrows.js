const user ={
    name: "Nanak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);   //give the current context
    }
}
// user.welcomeMessage();
// user.name = "Harsh"
// user.welcomeMessage();


// console.log(this);   // o/P => {}  but it give diferent result in browser console which is window object

// function vns(){
//     const username = "Nanak"
//     console.log(this.username); // o/p => undefined, means this is cant use for function
//     console.log(this);
// }

// vns()


// const vns = function(){
//     const username = "Nanak"
//     console.log(this.username)     // O/P=> undefined
// }
// vns();

const vns = () => {
    const username = "Nanak"
    console.log(this.username)     // o/p => undefined
    console.log(this);             // {}
}
// vns();


//basic arrow function    () => {}
// const addTwo = (num1, num2) => {         //Explicit Return 
//     return num1+num2;                        
// }
// console.log(addTwo(3,4));

//Implicit Return   same arrow function can be use in one line
const addTwo = (num1, num2) => (num1+num2); //here, return keyword are not used or ncessary
console.log(addTwo(3,5));                   // o/p => 8

const addThree = (num1, num2) => ({username: "Nanak"})   //returning object
console.log(addThree(3,5))



// Difference between using this in function and arrow function
function diff1(){
    console.log(this);
}
diff1();    // o/p=><ref *1> Object [global] {
            //     global: [Circular *1],
            //     clearImmediate: [Function: clearImmediate],
            //     setImmediate: [Function: setImmediate] {
            //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
            //     },
            //     clearInterval: [Function: clearInterval],
            //     clearTimeout: [Function: clearTimeout],
            //     setInterval: [Function: setInterval],
            //     setTimeout: [Function: setTimeout] {
            //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
            //     },
            //     queueMicrotask: [Function: queueMicrotask],
            //     structuredClone: [Function: structuredClone],
            //     atob: [Getter/Setter],
            //     btoa: [Getter/Setter],
            //     performance: [Getter/Setter],
            //     fetch: [Function: value],
            //     navigator: [Getter],
            //     crypto: [Getter]
            //   }


const diff2 = () => console.log(this)
diff2()         // o/p => {}