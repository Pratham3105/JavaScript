let a = 300;
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner scope : ",a); // 10
    
}

// console.log(a); // a is not defined
// console.log(b); // b is not defined
console.log(c); // 30
console.log("Outer scope : ",a); // 300

function one(){
    const username = "pratham"
    
    function two(){
        const website = "youtube"
        console.log(username) // pratham
    }
    // console.log(website); // website is not defiend
    two()
}
one()

if(true){
    const username = "Pratham"
    if(username==="Pratham"){
        const website = " youtube" 
        console.log(username+website); // Pratham youtube
    }
    // console.log(website); // website is not defined
}
// console.log(username); // username is not defined

console.log(addone(5)); // 6
function addone(num){
    return num+1
}

// console.log(addtwo); // Cannot access 'addtwo' before initialization 
const addtwo = function(num){
    return num+2
}
