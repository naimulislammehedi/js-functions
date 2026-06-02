// A Function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, you can put it inside a function and call it whenever needed. 

// without function 
console.log("Hello Mehedi"); 
console.log("Welcome to JavaScript"); 

console.log("Hello Rahim"); 
console.log("Welcome to JavaScript"); 

console.log("Hello Karim"); 
console.log("Welcome to JavaScript"); 

console.log("==========")

// with function 
function greet(name) {
    console.log("Hello " + name); 
    console.log("Welcome to JavaScript"); 
}

greet("Mehedi"); 
greet("Rahim"); 
greet("karim")