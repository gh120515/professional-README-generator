// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your project (repository) title?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage steps for your project?',
    },


    {
        type: 'input',
        name: 'contributing',
        message: 'How do you contribute to your project?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How do you perform tests to your project?',
    },

    { 
        type: "list",
        name: "license",
        message: "Please select the license(s) to your project.",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla", "MIT", "Apache"],
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

])
.then((data) => {
    const filename = `README-output.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});

// template for README (markdown)
const template = 
`

`

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.split('').join('')}.md`, data,
    (err) => {
        if(err) {
            console.log(err)
        }
        console.log('Your README is ready!')
    }
)};
writeToFile(fileName, template);



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


