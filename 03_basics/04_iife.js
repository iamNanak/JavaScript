// Immediately Invoked Function Expressions (IIFE)

// Sometime we want to execute our particular program to execute early as much as possible.
// like connection with Database.
//But, in this we pollute the global variable.
// To avoid this global variable pollute we use IIFE
function connect(){
    console.log("DB CONNECTED")
}
connect();

// The above fxn can be written in IIFE 

(function DBconnect(){        //named iife
    console.log("DB CONNECTED")
})();          //here, we explicitily put ; at end of code because it doesn't know when to stop. So, to tell where to stop ; is used else it throw error

(() => {                     //unnamed iife
    console.log("DB CONNECTED")
})();


((name) => {
    console.log(`${name}, your DB is Connected`)
})("Nanak")