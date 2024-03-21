#! /usr/bin/env node
 
import inquirer from "inquirer";

// Printing a Wellcome Message
console.log("\n\tWellcome To \'Huzaifa Qureshi\' - CLI Simple Calculator");

//Making Simple Calculator

const answer = await inquirer.prompt([
    {message: "Enter first number" , type: "number", name: "firstnumber"},
    {message: "Enter second number", type: "number", name: "secondnumber"},
    {message:"Select one of the operators to perform operation", type: "list", name: "operator", choices:["Addition","Subtraction","Multiplication","Division"]},
]);

//Conidtional statement

if(answer.operator ==="Addition"){
    console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator ==="Subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
} else if (answer.operator === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
} else {
    console.log("Please select valid operators")
}