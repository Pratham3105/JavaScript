let score = 33 ;
console.log(typeof score); // number
console.log(typeof(score)); // number

let str = "45";
console.log(typeof str); // string

let valueInNumber = Number(str);
console.log(typeof valueInNumber); //number

let a = "76abs";
console.log(typeof a); // string
let valueInNumber2 = Number(a);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); //NaN

let b = null;
console.log(typeof b); // object
let valueInNumber3 = Number(b);
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // 0

let c = undefined;
console.log(typeof c); // undefined
let valueInNumber4 = Number(c);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // NaN

let d = true;
console.log(typeof d); // boolean
let valueInNumber5 = Number(d);
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5); // 1

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof isLoggedIn); // number

console.log(booleanIsLoggedIn); //true
console.log(typeof booleanIsLoggedIn); // boolean

// 1 => true; 0 => false
// empty string is false
// "pt" => true

let someNUmber = 33;
let stringNumber = String(someNUmber);
console.log(stringNumber); // 33
console.log(typeof someNUmber); // number




