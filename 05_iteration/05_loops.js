//foreach

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){            // this is a callback fxn and unnamed
//     console.log(item);                      // for each loop using basic fxn
// })       

// coding.forEach((item)=>{                    // this is callback fxn using arrow fxn
//     console.log(item)
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)             // here only reference is pass on to forEach fxn.
                                    // Do not Execute by using ()

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })                                  

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})