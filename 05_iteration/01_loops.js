// for
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element===5){
        console.log("5 from if condition")
    }
    console.log(element)
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop is ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value is ${j} and Outer loop is ${i}`)
        // console.log(i + "*" +j+"="+i*j);
    }
    
}

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("5 Is Detected");
        break;
    }
    console.log(`Value of i is ${i}`)
    
}
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("5 Is Detected");
        continue;
    }
    console.log(`Value of i is ${i}`)
    
}