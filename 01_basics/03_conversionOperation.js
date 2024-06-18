// let score = "99"         //Output => 99  
// let score = "99abc"      //Output => Nan
// let score = null;        //Output => 0
// let score = undefined;   //Output => NaN
// let score = true;        //Output => 1 and 0 for false
let score = "Nanak";        //Output => NaN

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let isLoggedIn = "nanak"
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


// 0 => false; 1 and any other number => true
// null => false; "" => false
// "any string" => true


let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


//     *************************OPERATIONS***********************************

let value = 1;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);   modulus or remainder
// console.log(2**2);  power


str1 = "Hello";
str2 = " Nanak";
str3 = str1 + str2;
console.log(str3);