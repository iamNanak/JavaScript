const score = 400;

let balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());    // O/P => 100      but type is string
// console.log(balance.toString().length);  // O/P => 3   give length of the String

// console.log(balance.toFixed(2));   // O/P => 100.00   round off number to 2 decimal points

const number = 123.8966
// console.log(number.toPrecision(2));   //give precise value up to for given number i.e. 2,3 
// console.log(number.toPrecision(3));
// console.log(number.toPrecision(4));


const hundreds = 10000000;
// console.log(hundreds.toLocaleString());          //acc. to US counting
// console.log(hundreds.toLocaleString('en-IN'));   //acc. to IN counting


//*********************************MATH***************************************** */


// console.log(Math);
// console.log(Math.abs(-5));     // give absolute value i.e. turn -ve sign into +ve

// console.log(Math.round(5.6));  //give round off of the number
// console.log(Math.ceil(5.2))   // O/P=>6   like Greatest Integer Function
// console.log(Math.floor(5.6))  // O/P=>5   like Smallest Integer Funtion

// console.log(Math.min(3, 4, 6, 8));
// console.log(Math.max(3, 4, 6, 8));


console.log(Math.random());       //give random number in between 0 and 1
console.log((Math.random()*10) + 1);       //give random value *10 but to avoid 0 we add 1 to set min value be 1 
console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1))+min)   // max - min is to set range and add 1 to avoid 0 at last add min to set min value to get min or above value.