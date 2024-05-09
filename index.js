#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the tallest mountain in the world?",
        choices: ["K2", "Mount Everest", "Mount Kilimanjaro", "Denali"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.What is the capital city of Canada?",
        choices: ["Vancouver", "Toronto", "Quebec City", "Ottawa"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.How many bones are there in the adult human body?",
        choices: [" 256", "206", "216", " 232"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.In what year was Facebook founded?",
        choices: ["2000", "2004", "2008", "2010"],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.What is the world's largest desert?",
        choices: ["Mojave", "Siberian Desert", "Sahara", "Antarctic Desert"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "Mount Everest":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "Ottawa":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "206":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "2004":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "Antarctic Desert":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`Score: ${score}`);
