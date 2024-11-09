const score = 400;
console.log(score); // 400
const balance =new Number(100); // objects
console.log(balance); // [Number: 100]

console.log(typeof(balance.toString())); // string
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); //124
console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 10,00,000
console.log(hundreds.toLocaleString('en-In')); // 10,00,000

console.log(Number.MAX_VALUE); // 1.7976931348623157e+30
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

/************************************Math****************************************/

console.log(Math); // object
console.log(Math.abs(-2)); // negative value will be positive 2
console.log(Math.abs(4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.sqrt(100)); // 10
console.log(Math.min(4,9,5,3,5,6,1.8,4,35)); // 1.8
console.log(Math.max(4,9,5,3,5,6,1.8,4,35)); // 35

console.log(Math.random()); // always we get value between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.ceil(Math.random()*10));

const min = 30;
const max = 40;

console.log(Math.floor(Math.random()*(max-min+1))+min); 







