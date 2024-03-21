#! /usr/bin/env node
import inquirer from "inquirer";
// console.log(answer);
async function calculator() {
    const answer = await inquirer.prompt([
        { message: "ENTER FIRST NUMBER", type: "number", name: "firstnumber" },
        { message: "ENTER SECOND NUMBER", type: "number", name: "secondnumber" },
        {
            message: "SELECT ONE OF THE OPERATORS TO PERFORM OPERATION",
            type: "list",
            name: "operator",
            choices: ["Addition", "subtraction", "Multiplication", "Division"],
        },
    ]);
    if (answer.operator === "Addition") {
        console.log(answer.firstnumber + answer.secondnumber);
    }
    else if (answer.operator === "subtraction") {
        console.log(answer.firstnumber - answer.secondnumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log(answer.firstnumber * answer.secondnumber);
    }
    else if (answer.operator === "Division") {
        console.log(answer.firstnumber / answer.secondnumber);
    }
    else {
        console.log("ERROR");
    }
    const nextAction = await inquirer.prompt([{
            message: "select an option",
            type: "list",
            choices: ["Recalculate", "Quit"],
            name: "action"
        }]);
    if (nextAction.action === "Recalculate") {
        calculator();
    }
    else {
        return null;
    }
}
calculator();
