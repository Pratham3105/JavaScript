function sayMyName(){
    console.log("Pratham Tamrakar");
}
sayMyName; // funtion reference
sayMyName(); // fucntion call

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    
}
addTwoNumbers();// NaN
addTwoNumbers(3,3); // 6
addTwoNumbers("3",3); // 33
addTwoNumbers(3,"a"); // 3a
addTwoNumbers(3,null); // 3

function addNumbers(num1, num2){
    return num1+num2;
}
let result = addNumbers(10,10)
console.log(result); // 20

function loginUserMessage(username){ // (username="pratham")
    if(username===undefined){ // if(!username)
        console.log("please enter the username");
        return 
        
    }
    return `${username} just logged in `
}
let msg = loginUserMessage()
console.log(msg); // please enter the username

let message = loginUserMessage("pratham3125")
console.log(message); // pratham3125 just logged in


function calculateCartPrice(...num1){
    // (...)rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500)); // [ 200, 400, 500 ]

const user = {
    username:"pratham",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user) // Username is pratham and price is 199
handleObject( {
    username:"sam",
    price:199
}) // Username is sam and price is 199

const arr = [200,500,600]
function returnSecondValue (getArray){
    return getArray[1]
}
console.log(returnSecondValue(arr)); // 500
