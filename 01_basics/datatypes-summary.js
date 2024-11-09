// # primitive
// these are call by value
// 7 types : String,Number,Boolean,Null,Undefined,symbol,BigInt
// JS is dynamically typed language
// in Js we don't define data type

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp =null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); // false

const bigNumber = 10000657566565n;
console.log(typeof bigNumber); // bigint

// Reference (Non-primitive)
//Array, Objects.Functions

let heros =["shaktiman","naaraaj","doga"];
let myObj = {
    name:"pratham",
    age:19,
}
const myFunction =function(){
    console.log("hello world!!");
    
}
console.log(typeof myFunction); //function
