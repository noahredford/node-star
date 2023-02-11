// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMD = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([

    {name: 'description',
        message: 'What does this application do?',
        type: 'input'
    },
    {   
        message: "What is a description of the project",
        name: "input"
    },
    {   
        message: "How will this project be used?",
        name: "input"
    },
    {   
        message: "What licesnes are used?",
        name: "input"
    }
])};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
    (err) => err ? console.log(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await questions();
    writeToFile((answers.fileName), (generateMD(answers)));
}

// Function call to initialize app
init();
