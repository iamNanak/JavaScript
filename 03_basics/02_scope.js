// var = 30;
let a = 300;
if(true){
    let a = 30
    const b = 20
    // var = 30
    // console.log("INNER:",a)
    // function addNum({

    // })
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Nanak"

    function two(){
        const website="YouTube";
        console.log(username);
    }
    // console.log(website);      // out of block scope or can't access block scope

    two()
}

// one();
// 

if(true){
    const username ="Nanak";
    if(username==="Nanak"){
        const website = " GitHub"
        console.log(username+website)

    }
    // console.log(website);     //cant be access out of block
}
// console.log(username)        // out of scope


// +++++++++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++
addOne(5)                          //can be call before function declaration
function addOne(num){
    return num+1;
}
// addOne(5);

// addTwo(5)      // can't be call before function declaration bcz variable used to hold  
const addTwo = function(num){      // same as function but sometime called as expression
    return num+2;
}
addTwo(5);