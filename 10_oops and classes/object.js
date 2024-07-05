function mul5(num){
    return num*5
}

mul5.power = 2

console.log(mul5(5));        //25
console.log(mul5.power)     //2
console.log(mul5.prototype)  //{}

function createUser(username, score){
    this.username = username;
    this.score = score
}

// We can implement our prototype method on function
createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`score is ${this.score}`)
}

console.log(createUser.prototype);    //{ increment: [Function (anonymous)], printMe: [Function (anonymous)] } implemented property


const player1 = new createUser("Dhoni", 50);
const player2 = createUser("Kholi", 45);   //error bcz new keyword

player1.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor fucntion has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
 */