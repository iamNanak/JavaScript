// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI)

// Can value of PI be overwrite.   no because it encoded hardly (run the console.log just below here)
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

// Object.defineProperty(Math, 'PI', {
//     value:5,
//     writable: true,
//     enumerable:true,
//     configurable:true

// })
// console.log(descripter); // give error cant' be redefine
const User = {
    name: "Nanak",
    email: 'nanak@google.com',
    password: '1234',

    method: function(){
        console.log("this must not console in loop that why if check is used")
    }
}

console.log(Object.getOwnPropertyDescriptor(User, 'name'));

Object.defineProperty(User, 'name', {
    writable: false, 
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(User,'name'));

User.name = "Pankhuri";
console.log(User.name);

for (let [key,value] of Object.entries(User)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`)    // since the enumerable property is false for name, hence it not show in output
                                            //email : nanak@google.com
                                            //password : 1234
    }
    
}