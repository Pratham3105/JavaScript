// if statement

// if(condition){
// }

// <, >, <=, >=, ==, !=, ===, !==
const isUserLoggedIn = true;
if(isUserLoggedIn){
     console.log("User is logged in ");  // User is logged in 
    
}
let temperature = 41
if(temperature<50){
    console.log("temperature is less than 50"); // temperature is less than 50
}
else{
    console.log("temperature is greater than 50");
}

const balance = 1000
if(balance>500) console.log("test"); // test

if(balance>500) console.log("test"), // test
console.log("test2"); // test2

if(balance<500){
    console.log("balance is less than 500");
}
else if(balance<750){
    console.log("balance is less than 750");
}
else if(balance<900){
    console.log("balance is less than 900");
}
else{
    console.log("balance is less than 1200"); // balance is less than 1200
}

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard)
{
    console.log("Allow to buy"); //  Allow to buy
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in");  // User is logged in
}