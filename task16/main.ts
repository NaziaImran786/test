// ## Basic Functions Question:

// Define a function called `greet` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` function with the argument "John" and log the result to the console.

function greet(name:string) {
    let greeting = name; 
    return greeting;    
}
 let message = greet("john")
console.log(message);

// ## Function Return Value Question:

// Write a JavaScript function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The function should calculate the area of the rectangle and return the result. 

// Provide an example of calling this function with values `5` for length and `3` for width, and then print the result.

function calculateArea(length: number, width: number) {
    let rectangle = length * width;
    return rectangle    
}
let value = calculateArea(5 , 3)
console.log(value);


// ## Default Parameter Function Question:

// Create a JavaScript function named `greet` that accepts two parameters: `name` and `greeting`. The function should return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to `"Hello"`. 

// For example:
// - When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
// - When `greet("Jane")` is called, it should return `"Hello, Jane!"`.
function Greet(greeting:string = "Hello", name:string) {
    let greeting_message = greeting +" " + name
    return greeting_message    
}
let greetMessage = Greet("Good Morning" , "John");
let greetMessage1 = Greet("Jane");
console.log(greetMessage);
console.log(greetMessage1);

// ## Rest Parameter Question:

// Explain the concept of a rest parameter in typescript. write a typeScript function named `friend` that accepts any name of parameters and returns all name in array.

// For example:
// - If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
function friend(name1: string, name2: string, name3: string,...exta) {
    let friendName = [name1, name2, name3]
    return friendName    
}
let myFriend = friend("Taha", "Ali", "Ahmed", "Zara", "Adi")
console.log(myFriend);

// ## Spread Operator:

// Explain the concept of a spread operator in typescript. write a typeScript function named `friend` that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.

// For example:
// - If `name('taha', 'Ahmed',

function Friend(nams: string[]) {
    let originalArray = [names];
    let copyArray = [...names]; 
    copyArray.pop();

    return[originalArray, copyArray]
};
let [originalArray, copyArray] = Friend( "Ali", "Ahmed","Taha")
console.log(originalArray);
console.log(copyArray);

