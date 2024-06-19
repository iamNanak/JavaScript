const name = "Nanak";
const repoCount = 50;

// console.log(name + repoCount + " Value");   // old format

// By using Back ticks(`) sign and this is called as String Interpolation Method
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pac-man');

console.log(gameName[0]);
console.log(gameName.__proto__);  //output => {} tells that it is an object. using it in browser console give all function and method related to this object line toUpperCase() etc.

console.log(gameName.length);
console.log(gameName.toUpperCase());  // Here, original string is not changed since copy of data is get assigned or stack memory method is used.

console.log(gameName.charAt(3));
console.log(gameName.indexOf('-'));

console.log(gameName.substring(0, 4));
console.log(gameName.slice(-6, 4));    //same as substring but we can pass negative index too where it start from back or right 

const game = "  God of war  ";
console.log(game);
console.log(game.trim());  // there is also method to trim only at start or at end ie. trimStart() and trimEnd()
console.log(game.trim().split(' '));
console.log(game.trim().split(''));

console.log(gameName.split('-'));
// console.log(gameName.split('-'));


const url = "https://nanak@google.com/nanak%20gupta";
console.log(url.replace('%20','-'));
console.log(url.includes('nanak'));
console.log(url.includes('naak'));

