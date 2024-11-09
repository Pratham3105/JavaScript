const InstaUser = new Object() // Singleton
let instaUser = {}; // non - singleton

console.log(instaUser); // {}
console.log(InstaUser); // {}

instaUser.id = "123abc"
instaUser.name = "pratham"
instaUser.isLoggedIn = false

console.log(instaUser); // { id: '123abc', name: 'pratham', isLoggedIn: false }

let regularUser = {
    email: "someone@gmail.com",
    fullName : {
        userFullName : {
            firstName : "pratham",
            lastName : "tamrakar"
        }
    }
}
console.log(regularUser.fullName.userFullName) // { firstName: 'pratham', lastName: 'tamrakar' }
console.log(regularUser.fullName.userFullName.firstName); // pratham
// console.log(regularUser.fullName?.userFullName) // { firstName: 'pratham', lastName: 'tamrakar' }
// ? if exist then print otherwise doesn't

let obj1 = {
    1: "a",
    2: "b"
}
let obj2 = {
    3: "a",
    4: "b"
}
const obj3 = { obj1,obj2}
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1,obj2);
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// Object.assign(target,source); then 
console.log(obj4===obj1); // true
const obj5 = Object.assign({},obj1,obj2); // stores in target {}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = {...obj1,...obj2}
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// from database
const user = [
    {
        id:1,
        email: "someone@gmail.com"
    },
    {
        id:1,
        email: "someone@gmail.com"
    }
]
console.log(user[1].email); //someone@gmail.com

console.log(instaUser); // { id: '123abc', name: 'pratham', isLoggedIn: false }
console.log(Object.keys(instaUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser)); // [ '123abc', 'pratham', false ]
console.log(Object.entries(instaUser)); // [ [ 'id', '123abc' ], [ 'name', 'pratham' ], [ 'isLoggedIn', false ] ]

console.log(instaUser.hasOwnProperty('isLoggedIn')); // true 

// object de-structure
const course ={
    courseName: "JavaScript",
    prise: "999",
    courseInstructor: "pratham"
}
const{courseInstructor}=course
console.log(courseInstructor); // pratham

const{courseName:name}=course
console.log(name); // javaScript

// in react
// const navBar = ({company}) =>{
// }
// navBar(company="pratham")

// JSON api
// {
//     "name": "pratham",
//     "age": 45,
//     "email": "someone@google.com"
// }

// [
//     {},
//     {}
// ]



