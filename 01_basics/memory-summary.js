// stack(primitive) // we get the copy 
// heap(non-primitive) // we get the reference

let myYoutubeName = "PrathamTamrakar";
let anotherName = myYoutubeName;
anotherName = "codeWithHarry"
console.log(myYoutubeName); // PrathamTamrakar

console.log(anotherName); // codeWithHarry

let user1 ={
    email : "user@global.com",
    upi: "user@ybl",
}
let user2 = user1;
user2.email= "user2@global.com";

console.log(user1.email); // user2@global.com
console.log(user2.email); // user2@global.com

