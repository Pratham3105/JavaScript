const user = {
    username : "Pratham",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}
user.welcomeMessage() 
// Pratham, welcome to website
// {
//   username: 'Pratham',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

user.username = "sam"

user.welcomeMessage()
// sam, welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// } 
console.log(this) // {}

function one(){
    let username = "pratham"
    console.log(this.username); // undefiend
    
}
one()

const func = function(){
    let username = "pratham"
    console.log(this.username); // undefiend
    
}

const func1 = () => {
    let username = "pratham"
    console.log(this); // {}
    console.log(this.username); // undefiend
}
func1()

const addtwo = (num1,num2) => {
    return num1+num2
} 
console.log(addtwo(28,45)); // 73

// implicit return 
const add = (num1,num2) => num1+num2
// or const add = (num1,num2) => (num1+num2)
console.log(add(275,45)); // 320

