//Dates


let myDate = new Date();
// console.log(typeof myDate);  //Output => object   Since, Date is an object in JS
// console.log(myDate);   // Output => 2024-06-20T10:06:03.046Z
// console.log(myDate.toString());  // Output => Thu Jun 20 2024 10:08:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());   // Output => Thu Jun 20 2024
// console.log(myDate.toLocaleString()); // Output => 6/20/2024, 10:09:11 AM
// console.log(myDate.toISOString());    //Output => 2024-06-20T10:09:43.323Z
// console.log(myDate.toJSON());         //Output => 2024-06-20T10:13:28.871Z


let myCreatedDate = new Date(2024, 0, 26);
// console.log(myCreatedDate);                   // Output => 2024-01-26T00:00:00.000Z
// console.log(myCreatedDate.toDateString());    // Output =>  Fri Jan 26 2024    
                                              // Month start from 0 in JS
let myCreatedDateTime = new Date(2024, 0, 26, 5, 2);  //
// console.log(myCreatedDateTime.toLocaleString());     // O/P => 1/26/2024, 5:02:00 AM

// let date = new Date("2024-01-26");   // YYYY-MM-DD
// console.log(date.toLocaleString());  // MM-DD-YYYY

let date = new Date("01-26-2024");    // MM-DD-YYYY
// console.log(date.toLocaleString());   // MM-DD-YYYY

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(date.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 because month indexing start from 0
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",
})