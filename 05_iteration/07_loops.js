//map function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((nums) => nums * 10)      // maps function
const newNum = myNums.map((nums) => {return nums + 10})
// console.log(newNums);
// console.log(newNum);

const chain = myNums                        //chaining
                .map((nums) => nums*10)
                .map((nums) => nums + 1)
                .filter((nums) => nums>=40);
console.log(chain)