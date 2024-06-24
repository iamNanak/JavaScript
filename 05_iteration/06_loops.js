const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item)=>{   //it don't return a particular element from
//     // console.log(item);                 //array
//     return item
// })
// console.log(values)       //undefined 

const value = coding.forEach((item) => (item))
console.log(value)          //undefined

const myNums = [1,2,3,4,5,6,7,8,9,10];

const val = myNums.filter((nums) => nums > 4) //filter return value
// console.log(val);


const val1 = myNums.filter((nums)=>{//arrow fxn with curly braces must have explicit return
    return nums > 4
})
// console.log(val1);

const newNums = []
myNums.forEach((nums) => {
    if(nums > 4){
        newNums.push(nums)
    }
})
// console.log(newNums);


const books =[
    {
        title:"Book One", genre:"Fiction", publish:1981,edition:2004
    },
    {
        title:"Book Two", genre:"History", publish:1992,edition:2008
    },
    {
        title:"Book Three", genre:"Fiction", publish:1991,edition:2007
    },
    {
        title:"Book Four", genre:"Science", publish:1963,edition:2009
    },
    {
        title:"Book Five", genre:"History", publish:2001,edition:2005
    },
    {
        title:"Book Six", genre:"Non-Fiction", publish:1999,edition:2010
    },
]

// const userBooks = books.filter((bk)=>bk.genre==="History");
// const userBooks = books.filter((bk)=>bk.publish>2000);
const userBooks = books.filter((bk)=>{
    return bk.edition>2000 && bk.genre === "History";
    
});
// console.log(userBooks)