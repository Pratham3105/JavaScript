let marvelHeroes = ["thor","captain america","captain marvel"];
let dcHeroes = ["superman","batman","spiderman"];

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); // ['thor','captain america','captain marvel',[ 'superman', 'batman', 'spiderman' ]]
console.log(marvelHeroes[3]); // [ 'superman', 'batman', 'spiderman' ]

let marvel_Heroes = ["thor","captain america","captain marvel"];
let dc_Heroes = ["superman","batman","spiderman"];


let total_Heroes = marvel_Heroes.concat(dc_Heroes);
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(total_Heroes); // ['thor','captain america','captain marvel','superman', 'batman', 'spiderman']

// spread
let all_heroes = [...dc_Heroes,...marvel_Heroes];
console.log(all_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,4,5]];
// const myNewArray = another_array.flat(Infinity);
// console.log(myNewArray);

const myNewArray = another_array.flat(Infinity);
console.log(myNewArray); // [1,2,3,4,5,6,7,6,7,4,5];


console.log(Array.isArray(myNewArray)); // true
console.log(Array.isArray("pratham")); // false
console.log(Array.from("pratham")); // ['p', 'r', 'a','t', 'h', 'a','m']
console.log(Array.from({ name:"pratham"})) // [] // intersting

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]








