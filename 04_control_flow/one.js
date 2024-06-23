//if 
const isLoggedIn = true;
const temp = 41;
// <, >, <=, >=, ==, !=, ===, !==

// if(temp < 50){
//     console.log("Less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }
// console.log("Execute")

// const score = 200;
// if(score > 100){
//     const power = 'fly';
//     console.log(`User power is ${power}`);
// }
// console.log(`User power is ${power}`)


const balance = 1000;
// if(balance > 500) console.log("test");   //implicit scope written  in one line

// if(balance < 500){
//     console.log("less than")
// }else if(balance < 750){
//     console.log("less than")
// }else if(balance < 900){
//     console.log("less than")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true;
const debitCard = false;


if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(userLoggedIn || debitCard){
    console.log("Allow to buy course")
}