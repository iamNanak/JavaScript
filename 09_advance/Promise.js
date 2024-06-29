const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed")
        resolve();      // connect with then()
    }, 1000)
})
promiseOne.then(function(){
    console.log('Promise consumed')
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve();
    },1000)
}).then(function(){
    console.log("Async is Resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: 'Nanak', email: 'iamnanak01@gmail.com'})
    },1000)
})

promiseThree.then(function(data){
    console.log(data)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Nanak", pass:"1234"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
});

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('The promise is either resolve or rejected'))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'JavaScript', pass: "1234"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(respose)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }

// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})