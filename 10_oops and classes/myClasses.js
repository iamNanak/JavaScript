// ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}agh`
    }

    capsUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Nanak", "nanak@google.com", '1234')
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.capsUsername());

// behind the scene

function User(username, email, password){
    this.username = username 
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}agh`
}

User.prototype.capsUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user = new User("Nanak", "nanak@google.com", '1234')
console.log(user.encryptPassword());
console.log(user.capsUsername());