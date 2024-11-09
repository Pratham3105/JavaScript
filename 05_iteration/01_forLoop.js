// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
        console.log("5 is best number");
        
    }
    console.log(element); // 0 1 2 3 4 5 6 7 8 9
    
}
// console.log(element); // element is not defined

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Inner loop value : ${j} and inner loop ${i}`);  
    }   
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i+'*'+j+' = '+i*j);  
    }   
}

let myArray = ["flashMan","BatMan","SuperMan"]
console.log(myArray.length); // 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // flashMan BatMan SuperMan
    
}

// break and continue
console.log("for break");

for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(element);
    if(element==5){
        break;
    }
}
console.log("for continue");

for (let index = 1; index <= 10; index++) {
    const element = index;
    if(element%2==0){
        continue;
    }
    console.log(element);
}
