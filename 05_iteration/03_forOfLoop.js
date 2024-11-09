// for...of loop 
// high order array loops
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num); // 1 2 3 4 5

}
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`); // Each character is H

}

// Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'FR' => 'France'
// }
for (const key of map) {
    console.log(key);
    // ['IN', 'India']
    // ['USA', 'United States of America']
    // ['FR', 'France']
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
    //     IN :- India
    // USA :- United States of America
    // FR :- France
}

const myObject = {
    'game1': 'badminton',
    'game2': 'khokho'
}
// for (const [key, value] of myObject) {
//     console.log(key + ':-' + value);

// }
// we can't used forof loop for the objects