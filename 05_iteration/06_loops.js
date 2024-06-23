const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item)=>{   //it fail to return a particular element from
//     // console.log(item);                 //array
//     return item
// })
// console.log(values)       //undefined 

const myNums = [1,2,3,4,5,6,7,8,9,10];

const val = myNums.filter((nums) => nums > 4)
console.log(val);


const val1 = myNums.filter((nums)=>{//arrow fxn with curly braces must have explicit return
    return nums > 4
})
console.log(val1);