const name = "pratham";
const repoCount = 50;
console.log(name + repoCount + " value"); //pratham50 value
console.log(`Hello My name is ${name} nad my repo name is ${repoCount}`); // Hello My name is pratham nad my repo name is 50

// we can declare string in one more way
const gameName = new String("prathamTam");
console.log(gameName[0]); // p
console.log(gameName.__proto__); // {}
console.log(gameName.length); //10
console.log(gameName.toUpperCase()); // PRATHAMTAM
console.log(gameName.charAt(2)); // a
console.log(gameName.indexOf('t')); // 3
console.log(gameName.substring(1,4)); // rat // last index alphabet is not included 
// we can not give negative index in the substring
console.log(gameName.slice(0,4)); // prat
console.log(gameName.slice(-8,7)); // atham

const newString = "      tampra       ";
console.log(newString);
console.log(newString.trim()); // tampra without space 

const url ="https://github.com/pratham%203105";
console.log(url.replace('%20','-')); // https://github.com/pratham-3105

console.log(url.includes('pratham')); // true
console.log(url.includes('raj')); // false

let newStringTwo = "pratham-tam-jbp";
console.log(newStringTwo.split('-')); // [ 'pratham', 'tam', 'jbp' ]

