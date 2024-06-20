//Arrays

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[2]);
const heros = ["Iron-Man", "Wolverine", "Spider-Man", "Batman"];

const myArr2 = new Array(1, 3, 4, 5, 6, 7);

//Arrays Method

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);       //put 9 at start or first or top
// console.log(myArr);
// myArr.shift();
// myArr.shift();
// console.log(myArr);


// console.log(myArr.includes(2));
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(9));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);         //0,1,2,3,4,5
// console.log(typeof newArr);  //string


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);      // o/p=> [1,2] but it doesn't change the original array
console.log(myn1);                  // o/p=>  [1,2]
console.log("B ", myArr);           // o/p => B [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1,3);     // o/p => [1,2,3] but it cut the original array at given range 
console.log(myn2);                  // o/p => [1,2,3]
console.log("C ", myArr);           // o/p => C [0,4,5]

