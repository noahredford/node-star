// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMD = require('./utils/generateMarkdown');
const { type } = require('os');
// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([

        {name: 'title',
        message: 'What is the title of your project?',
        type: 'input'
    },

    {name: 'description',
        message: 'Give a brief description of what this project does:',
        type: 'input'
    },

    {name: "installation",
        message: "How does your user install this application?",
        type: 'input'
    },
    {name: "usage",
        message: "How is this appliction used?",
        type: "input"
    },

    {name: "issues",
    message: "How would a user report issues to you?",
    type: "input"
    },
    {name: "contribute",
    message: "How can another developer contribute to this project?",
    type: "input"
    },
    {name: "testing",
    message: "What tests have been done on the project?",
    type: "input"
    },
    {name: "username",
    message: "What is your github username?",
    type: "input"
    },
    {name: "email",
    message: "What is your email address?",
    type: "input"
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
