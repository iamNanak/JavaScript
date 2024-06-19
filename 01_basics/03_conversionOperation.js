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
// console.log(str3);

// let a = console.log(1 + "2");      //output => 12              //number + number = number
// console.log(typeof a);             //output => undefined       //number + string = string
// let b = console.log("1" + 2);      //output => 12              //string + number = string
// console.log(typeof b);             //output => undefined
// let c = console.log("1" + 2 + 2);  //output => 122
// console.log(typeof c)              //output => undefined
// let d = console.log(1 + 2 + "2");  //output => 32
// console.log(typeof d);             //output => undefined

// console.log(3 + 4 * 5 % 3);

// console.log(true);                   //output => true
// console.log(+true);                  //output => 1
// console.log(+"");                    //output => 0
// console.log(true+;)                   //output => error


let num1, num2, num3;
num1 = num2 = num3 = 2+2;       // bad way to assign value

let gameCounter = 100;
// let a = gameCounter++;
// console.table([gameCounter, a]);


// let b = ++gameCounter;
// console.table([gameCounter, b]);