// Immediately Invoked function Expression (IIFE)

(function connect(){
    // named IIFE
    console.log(`DB CONNECTED`)
    
})();
// SEMICOLON IS REQUIRED IN THIS SITUATION

(() => {
    // unanamed IIFE or simple IIFE
    console.log("DB CONNCTED SECOND")
    
})();

((name) => {
    console.log(`my name is ${name}`);
    
})("Pratham")
