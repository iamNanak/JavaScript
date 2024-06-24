// reduce function

const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, currVal){  // using simple function
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0)       // initial value of accumulator is 0 given here or you can change acc. to you

const myTotal = myNums.reduce ((acc, currVal) => acc + currVal, 0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "pyhton",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const subTotal = shoppingCart.reduce((acc, item)=> acc+item.price,0);
console.log(subTotal);