const myObj = {
    js: 'javaScript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
    // console.log(key);

}
for (const key in myObj) {
    // console.log(myObj[key]);

}
for (const key in myObj) {
    // console.log(`${key} is shortcut key for ${myObj[key]}`);
}


const language = ["js","rb","py","java","cpp"]

for (const key in language) {
    // console.log(key);     // it return  the index value of each element
    // console.log(language[key]);
}

const map = new Map();    
map.set('IN', "India");  
map.set('USA', "United State of America");
map.set('Fr', "France");
map.set('SA', "South Africa");
map.set('IN', "India");

for (const key in map) {   // map is not iterable 
    // console.log(key)       // it don't give any output 

}