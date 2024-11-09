const coding = ['js', 'java', 'cpp', 'py']

console.log(Array.isArray(coding)); // true
coding.forEach(function (item) {
    console.log(item);
    // js
    // java
    // cpp
    // py
})

coding.forEach((item) => {
    console.log(item);
    // js
    // java
    // cpp
    // py
})
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)
// js
// java
// cpp
// py

coding.forEach((item, index, array) => {
    console.log(item, index, array);
    // js 0['js', 'java', 'cpp', 'py']
    // java 1['js', 'java', 'cpp', 'py']
    // cpp 2['js', 'java', 'cpp', 'py']
    // py 3['js', 'java', 'cpp', 'py']
})

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach((item) => {
    console.log(item);
    // { languageName: 'javascript', languageFileName: 'js' }
    // { languageName: 'java', languageFileName: 'java' }
    // { languageName: 'python', languageFileName: 'py' }
})
myCoding.forEach((item) => {
    console.log(item.languageFileName);
    // js
    // java
    // py
})
myCoding.forEach((item) => {
    console.log(item.languageName);
    // javascript
    // java
    // python
})
