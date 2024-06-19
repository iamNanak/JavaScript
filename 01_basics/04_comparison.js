
// console.log(2 != 2);
// console.log(2 > 2);
// console.log(2 < 2);
// console.log(2 >= 2);
// console.log(2 <= 2);
// console.log(2 == 2);

// console.log("2">1);   //output => true
// console.log("02">1);  //output => true

console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true             //This is because equality check operator(==)  and comparison operator works differently. Comaparison convert null into 0 i.e. 3 is true and 1 is false

console.log(undefined == 0);  //false
console.log(undefined < 0);   //false
console.log(undefined > 0);   //false

//strict check ===

console.log("2"===2);  //false  it compare without changing the data type