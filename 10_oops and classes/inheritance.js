class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password 
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const user1 = new Teacher("Nanak", "nanak@google.com", '1234')
user1.addCourses()
user1.logMe();

const user2 = new User("Nanak")
// user2.addCourses()   TypeError: user2.addCourses is not a function    (not have access)
user2.logMe()

console.log(user1 === user2);   // false
console.log(user1 === Teacher); // false
console.log(user1 instanceof Teacher)  // true 
console.log(Teacher instanceof User)   // false
console.log(user2 instanceof User)    // true
