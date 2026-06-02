// Scope: Variables declared inside a function cannot be accessed outside it. 
function test() {
    let message = "Hello"; 
    console.log(message); 
}

test(); 

// console.log(message); 