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
        message: 'Enter Features:',
        name: 'features',
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
        type: 'list',
        message: 'Pick license:',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GPL v3", "ISC" , "MPL 2.0", "none"]
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
    fs.writeFile('./generated_readmes/README.md', genMarkdown.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
        writeToFile(`README.md`, response)
    );
}

// Function call to initialize app
init();
