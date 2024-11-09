
const user = {
    name: "pratham",
    emailId: "pratham@global.com",
    getUserDeatails: function(){
        console.log("Got user deatils from database");
        console.log(this.name);
        console.log(this);
        
        
    }
}
console.log(user.name); // pratham
console.log(user.getUserDeatails()); 
// Got user deatils from database
// pratham
// {
//     name: 'pratham',
//     emailId: 'pratham@global.com',
//     getUserDeatails: [Function: getUserDeatails]
// }
console.log(this); // {}


// const promiseOne = new Promise()
// const date = new Date()
// new is constructor function
// constructor function gives a new copy or new instance 

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this
}

const userOne = User("pratham",12,true)
console.log(userOne);
const userTwo = new User("Tamrakar",10,true)
console.log(userOne); // overwrite the function UserOne value
const userThree = new User("raj",1,false)
console.log(userOne); // not changed
console.log(userThree); 
console.log(userThree.constructor); // [Function: User]

// instanceof








