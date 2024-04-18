import inquirer from "inquirer";

// ## Calculator

// - make addition calculator with the help of inquirer and 2 numbers.

let add_number = await inquirer.prompt(
    [
        {
            name: "firstNumber",
            type: "number",
            message: "Enter First Number",
        },
        {
            name: "secondNumber",
            type: "number",
            message: "Enter Second Number",
        },      
    ]
)
console.log(add_number.firstNumber + add_number.secondNumber);    


