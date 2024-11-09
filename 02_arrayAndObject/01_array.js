// Array
// shallow copy
const myArr = [0,1,2,3,4,5,6,7,8,9]
const myHeros = ["Shaktiman","naagraj",]
const arr = new Array(1,2,3,4,5,6,7,8,9)
console.log(typeof arr); // object


console.log(arr[5]);// 6
arr.push(10); // insert element at the last
arr.push(11); 
console.log(arr); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]
arr.pop(); // delete the last element
console.log(arr); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
arr.unshift(0); // insert element at starting of the array
console.log(arr); // [0, 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
arr.shift(); // delete element from starting of the array
console.log(arr); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

console.log(arr.includes(9)); // true 
console.log(arr.indexOf(9)); // 8 

// let newArr = arr.join();
// console.log(arr); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log(newArr); // 1,2,3,4,5,6,7,8,9,10
// console.log(typeof newArr); // STRING

// SLICE AND SPLICE

console.log("A ",arr); // A [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

const myn1 = arr.slice(1,3);
console.log(myn1); //  [ 2, 3 ]
console.log("B ",arr); // B [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

const myn2 = arr.splice(1,3);  
console.log(myn2); //  [ 2, 3, 4 ]
console.log("C ",arr); // C [1, 5, 6, 7, 8, 9, 10]
console.log(typeof arr); // object
console.log(typeof myArr); // object












