// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github usernames?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:'
    },
    {
        type: 'list',
        name: 'liscense',
        message: 'What liscense would you like to choose for your project?',
        choices: ['MIT', 'Mozilla 2.0', 'Apache 2.0', 'BSL 1.0', 'none']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be ran to install dependencies?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be ran to for the tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usefaq',
        message: 'What does the user need to know about using the repository?'
    },
    {
        type: 'input',
        name: 'contributefaq',
        message: 'What does the user need to know about contributing to the repository?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log('Hello Node');