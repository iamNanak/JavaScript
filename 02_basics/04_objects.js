const tinderUser1 = new Object();  //singleton object 
const tinderUser2 = {}             //literals or non singleton object
// console.log(tinderUser1);          // O/P => {}
// console.log(tinderUser2);          // O/P => {} same o/p for both, no difference internally

const tinderUser ={};

tinderUser.id = "123abc";
tinderUser.name = "Maddy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser ={
    email:"some@google.com",
    fullname: {
        userfullname:{
            firstname:"Maddy",
            lastname:"Don"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);