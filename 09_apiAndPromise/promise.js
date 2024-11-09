/*
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls, crptography , network
    setTimeout(() => {
        console.log('Async task 1 is completed');
        resolve();
    }, 2000);
})
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
})
.then(function(){
    console.log("Async 2 is resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"ptam",email:"ptam@gnail.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "pratham", passward: "123@pt" })
        } else {
            reject('Something went wrong')
        }
    }, 1000);
})
promiseFour.then((user) => {
    console.log(user)
    return user.username
} ).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=> console.log("The Promise either resolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "pratham", passward: "123@pt" })
        } else {
            reject('Js went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}
consumePromiseFive()

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // DATA
        // const response = await fetch('https://api.github.com/users/pratham3105')
        const data = await response.json();
        console.log(data);
        
        
    } catch (error) {
        console.log(error);

    }
}
getAllUser()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>console.log(error))

