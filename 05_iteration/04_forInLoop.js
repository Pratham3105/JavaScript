const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}
for (const key in myObject) {
    console.log(key);
    // js
    // cpp
    // rb
    // py
}
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
    // js shortcut for javascript
    // cpp shortcut for c++
    // rb shortcut for ruby
    // py shortcut for python
}

const programming = ['js', 'cpp', 'py', 'java']
for (const key in programming) {
    console.log(key);
    // 0
    // 1
    // 2
    // 3
}
for (const key in programming) {
    console.log(programming[key]);
    // js
    // cpp
    // py
    // java
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(map); // no answer
// }