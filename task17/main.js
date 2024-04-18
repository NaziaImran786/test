// ## Basic Arrow Functions Question:
// Define a Arrow function called `greet` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` Arrow function with the argument "John" and log the result to the console.
var greeting = function (name) {
    return "Hello ".concat(name, " ");
};
console.log(greeting("John"));
// ## Arrow Function Return Value Question:
// Write a JavaScript Arrow function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The Arrow function should calculate the area of the rectangle and return the result. 
// Provide an example of calling this Arrow function with values `5` for length and `3` for width, and then print the result.
var calculateArea = function (length, width) {
    return length * width;
};
console.log(calculateArea(5, 3));
// ## Default Parameter Arrow Function Question:
// Create a JavaScript Arrow function named `greet` that accepts two parameters: `name` and `greeting`. The Arrow function should return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to `"Hello"`. 
// For example:
// - When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
// - When `greet("Jane")` is called, it should return `"Hello, Jane!"`.
var greet = function (name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name);
};
console.log(greet("John", "Good morning"));
console.log(greet("Jane"));
