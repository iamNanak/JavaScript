class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createID(){   // static keyword restrict the use of method for the instance of the class
        return `123`
    }
}

const user1 = new User("Nanak")
// console.log(user1.createID());    return error


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const user2 = new Teacher("Nanak", "nanak@google.com")
console.log(user2)
user2.logMe();
// console.log(user2.createID());    return error because cant' be access. since, static