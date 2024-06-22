
function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("K");
}
// sayMyName;    // function Reference o/P => nothing
// sayMyName();  // Function call or execution 


// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumbers();  // NaN
// addTwoNumbers(3, 5);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");  //problem since we didnt write program to check numbers
// addTwoNumbers(3, null);

// const result = addTwoNumbers(3,4);
// console.log("Result: ",result);   //undefined since function not returning any value

function addTwoNumbers(number1, number2){
    // let result = (number1+number2);
    // return result;
    // console.log("Nanak");   // Unreachable Code. After return any code will be unreachable
// or

    return number1+number2;
}
const result = addTwoNumbers(3,4);
// console.log("Result: ",result);

function loginUserMessage(username/*= "sam"*/){//also to avoid undefined,give default value
    if(!username){                  // !username => (username === undefined) (no username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged IN`; 
}

// console.log(loginUserMessage("Nanak"));
// console.log(loginUserMessage(""));      //empty string input. O/P => just logged IN
// console.log(loginUserMessage());  // when input is nothing. O/P undefined just logged IN

function calculateCartPrice(...num1){  // ...num is rest or spread operator and named as usage
    return num1;

}
// console.log(calculateCartPrice(19,23,100,345,2000));


function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice1(19,23,100,345,2000));

const user ={
    name: "Nanak",
    price: 999
}

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObjects(user);
handleObjects({
    name: "sam",
    price: 499
})

const myArray = [20,45,50,100,150];
function handleArray(array){
    return array[2];
}
console.log(handleArray(myArray));
console.log(handleArray([100,200,300,400]));