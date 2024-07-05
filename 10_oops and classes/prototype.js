let myName = "Nanak";
let myWork = "Web Development      "
// console.log(myName.length)

//like the length property of string if we want to create a method which give as the true length i.e. trueLength() which ignore all extra whitespaces and give us the actual length of the string.

let heros = ["thor", "spiderman", "hulk"];

let heroPower = {
    thor: "lightining",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.nanak = function(){
    console.log(`Nanak is Omnipotent and present in all Object`)
}

// heroPower.nanak();  //Nanak is Omnipotent and present in all Object 
// this make the method available in all object.

// heros.nanak();

Array.prototype.heyNanak = function(){
    console.log('Nanak says Hello')
}

// heros.nanak();
// heros.heyNanak();
// heroPower.heyNanak();  give error


//  inheritance

const user = {
    name: "nanak",
    email: "iamnanak01@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport   // implement use of method of other object or Inheritance
}

Teacher.__proto__ = user   //old appraoches


// mordern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport can access all property of Teacher




let ex = "I have all the Money.      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is:`, this.trim().length)
}

ex.trueLength();

"Nanak".trueLength();