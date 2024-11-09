// literal 

// constructor --> singleton
// object.create

// object literals

const mysym = Symbol("key1");

const jsUser = {
    name: "pratham",
    age: 19,
    mysym: "mykey1",
    [mysym]:"mykey2",
    location: "jabalpur",
    email: "pratham@gmail.com",
    branch: "CSE",
    semester: 5,
    friend:["prashnat","pratham","raj"]
}
console.log(jsUser.name);// pratham
console.log(jsUser["email"]); // pratham@gmail.com
console.log(jsUser["name"]);// pratham
console.log(jsUser["age"]); // 19

console.log(jsUser.mysym); // mykey1
console.log(typeof jsUser.mysym); // string

console.log(jsUser[mysym]); // mykey2
console.log(typeof jsUser[mysym]); // string

jsUser.email = "prathamtamrkar849@gmail.com";
console.log(jsUser.email); //  prathamtamrkar849@gmail.com

// Object.freeze(jsUser);
// jsUser.email = "prathamz849@gmail.com";
// console.log(jsUser.email); //  prathamtamrkar849@gmail.com

console.log(jsUser);
// {
//   name: 'pratham',
//   age: 19,
//   mysym: 'mykey1',
//   location: 'jabalpur',
//   email: 'prathamtamrkar849@gmail.com',
//   branch: 'CSE',
//   semester: 5,
//   friend: [ 'prashnat', 'pratham', 'raj' ],
//   [Symbol(key1)]: 'mykey2'
// }

jsUser.greetings = function(){
    console.log("Hello jsUser");
    
}

jsUser.greetingsTwo = function(){
    console.log(`Hello jsUser, ${this.name}`);
    
}
console.log(jsUser.greetings); // [Function (anonymous)]
console.log(jsUser.greetings()); // Hello jsUser
console.log(jsUser.greetingsTwo()); // Hello jsUser, pratham