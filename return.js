// Return Statement: The return keyword sends a value back from a function. 
function add(a, b) {
    return a + b; 
}

let result = add(10, 20); 
console.log(result); 

// without return 
function add2(a, b) {
    console.log(a + b); 
}

let result2 = add2(10, 20); 
console.log(result2); 

// undefined: because console.log() only prints the value, it doesn't return it. 