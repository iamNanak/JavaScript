// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const val of arr) {
    // console.log(val)
}

const str = "Nanak"
for (const i of str) {
    // console.log(i);
    
}

//Maps

const map = new Map();    // Map is similar as object but it can't allow duplicate values
map.set('IN', "India");  // It remember the order of the entered element which object don't
map.set('USA', "United State of America");
map.set('Fr', "France");
map.set('SA', "South Africa");
map.set('IN', "India");

// console.log(map)

for (const key of map) {
    // console.log(key);           // return key, value array
}

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    game1 : "NFS",
    game2 : "God of war",
    game3 : "Prince of Persia"
}
// for (const [key, value] of myObj) {     // Object is not iterable using for of loop 
//     console.log(key,':-',value)         // Throw TypeError
// }

