#! /usr/bin/env node
import inquirer from "inquirer";
// declare a constant answer and assign it to the result of inquirer.prompt function..
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "enter your sentence to count the words: "
});
const words = answer.sentence.trim().split(" ");
// print the array words to the concole
console.log(words);
// print the words count of the sentence to the console.
console.log(`your sentence words count is ${words.length}`);
