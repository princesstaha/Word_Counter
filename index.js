import inquirer from "inquirer";
let sentence = await inquirer.prompt([{
        name: "count",
        message: "Enter your Sentence",
        type: "input",
    }]);
let totalcount = sentence.count.trim().split(" ");
console.log(`Total number of words are : ${totalcount.length}`);
