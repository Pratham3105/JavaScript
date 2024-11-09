const userEmail = "pratham@gmail.com"
if(userEmail){
    console.log("Got user Email"); // Got user Email
}
else{
    console.log("Don't have User Email");
    
}

// falsy Value
// false,0,-0,BigInt 0n, "", null, undefined, NaN

// truthy value
// "0",'false'," ",[],{}, fucntion(){}

const emptyArray = []
if(emptyArray.length===0){
    console.log("Array is empty");
    
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is Empty");
}

// Nullish coalescing Operator (??): Null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5
val1 =null ?? 10;
console.log(val1); // 10
var1 = undefined ?? 15
console.log(val1); // 15
val1 = null ?? 10 ?? 10 
console.log(val1); // 10

// ternary operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("less than 80 ") : console.log("more than 80"); // less than 80


