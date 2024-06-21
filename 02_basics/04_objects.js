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
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj = {obj1, obj2}
// console.log(obj)      //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2, obj3); // {} it is an optional parameter and act as a target object where merging of objects take place   *(Doubt hai,prefer mdn documentation)
// console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3};
// console.log(obj5);


const users = [
    {
        id: 1,
        email: "@hotmail.com"
    },
    {
        id: 1,
        email: "@hotmail.com"
    },
    {
        id: 1,
        email: "@hotmail.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("fullname"));  //false
// console.log(tinderUser.hasOwnProperty("id"));        //true



const course = {
    courseName: "JavaScript",
    price: 999,
    studName:"Nanak"
}

const {studName} = course    // {which value you want} = from where you want
console.log(studName);

// or

const {studName:Name} = course    // {which value you want:Named short} = from where you want
console.log(Name);


// In React   (Objects Destructuring)
const navbar = ({company}) => {

}
navbar(company = "Google")

//JSON
// {
//     //JSON is just an object wihtout name
//     "name": "Nanak",
//     course"name: "Java Script",
//     "price": "free"

// }