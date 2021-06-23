// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const genMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your project title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter intstallation instructions:',
        name: 'install_inst',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage_info',
    },
    {
        type: 'input',
        message: 'Enter contribution guidlines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test_inst',
    },
    {
        type: 'input',
        message: 'Pick license:',
        name: 'license_array',
        choose: ["option a", "option b"]
    },
    {
        type: 'input',
        message: 'Enter github profile:',
        name: 'git_prof',
    },
    {
        type: 'input',
        message: 'Enter email:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    console.log(fileName)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
        writeToFile(`README.md`, response)
    );
}

// Function call to initialize app
init();
