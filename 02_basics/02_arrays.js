const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
const dc_heros = ["SuperMan", "Flash", "BatMan"];

// marvel_heros.push(dc_heros);     // push result on existing array
// console.log(marvel_heros);    // O/P => [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]       it treat an array as an object or add it to first array as an element 

// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);   //concat result on a new array
// console.log(all_heros)

// using Spread Operators => [...array]
const allHeros = [...marvel_heros, ...dc_heros];
console.log(allHeros)                         //give result same as concat but have option to add 2 or more arrays altogehter.
