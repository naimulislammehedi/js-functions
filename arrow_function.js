// Arrow Funciton (ES6): Shorter syntax for writing functions 
const greet = () => {
    console.log("Hello World"); 
}

greet(); 

// Arrow function with parameters 
const greet2 = (name) => {
    console.log("Hello " + name); 
}; 
greet2("Mehedi"); 

// Arrow function with return 
const add = (a, b) => {
    return a + b; 
}; 

console.log(add(5, 3)); 