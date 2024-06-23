//  const userEmail = "nanak@google.com"
//  const userEmail = ""
 const userEmail = []

 if(userEmail){
    console.log("Got user email")
 }else{
    console.log("Don't have user email")
 }



 // Falsy Value
//   false, 0 , -0, BigInt => 0n, null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0){            // if you know that passed value is array
    console.log("Array is empty");
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}


// remember some points
// false == 0  => true
// false == '' => true
// 0 == ''     => true



// Nullish Coalescing Operator (??)
let val;
// val = 5 ?? 10
// val = null ?? 10
// val = null ?? undefined
// val = undefined ?? 15
// val = null ?? 10 ?? 15;
// val = undefined ?? 10 ?? 15;

console.log(val)

// Ternary Operators

// condition ? true : false

const iceTeaPrice = 10;
iceTeaPrice >= 90 ? console.log("more than 90") : console.log("less than 90")