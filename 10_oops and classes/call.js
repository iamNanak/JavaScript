function setUsername (username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username);  // call is use to hold the reference of the method  or call pass the  current execution context to the other function
    
    this.email = email;
    this.password= password
}

const user = new createUser("Nanak", "email@google.com", "123")
console.log(user)