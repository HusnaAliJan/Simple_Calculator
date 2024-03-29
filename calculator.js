import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Selectr the Operator", type: "list", name: "operator", choices: ["addition", "substraction", "multiplication", "division"]
    }
]);
if (answer.operator === "addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Wrong Operator");
}
