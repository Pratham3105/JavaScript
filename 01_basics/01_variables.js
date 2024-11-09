const accountId = 144548;
let accountEmail = "pratham@global.com";
var accountPassword = "12334";
acoountCity = "jaipur";

// accountId = 2 
// const changing is not allowed.
accountEmail = "prathamtam@global.com";
accountPassword = "2004z2004";
accountCity = "jabalpur";
let accountState;

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
    prefer not to use var 
    beacause  of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

