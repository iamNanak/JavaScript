const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
const dc_heros = ["SuperMan", "Flash", "BatMan"];

// marvel_heros.push(dc_heros);     // push result on existing array
// console.log(marvel_heros);    // O/P => [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]       it treat an array as an object or add it to first array as an element 

// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);   //concat result on a new array
// console.log(all_heros)

// using Spread Operators => [...array]
const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros)                         //give result same as concat but have option to add 2 or more arrays altogehter.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity)    //use to spread out the array at certain given level  like 2, 3 or we can also use Infinity.
// console.log(real_another_array);


console.log(Array.isArray("Nanak"));
console.log(Array.from("Nanak"));
console.log(Array.from({name:"Nanak"}));  // O/P=>[] because it is unable to make array, you have to tell using what symbo it convert into array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
