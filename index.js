var inquirer = require('inquirer');
var fs = require('fs');

var inquirer = require('inquirer');
inquirer
    .prompt([
        // Input questions for user
        {
            type: 'input',
            message: 'Please enter up to three characters of text for your logo.',
            name: 'charInput'
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your logo text color.',
            name: 'textColorInput'
        },
        {
            type: 'list',
            message: 'Please select a shape.',
            name: 'shapeInput',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your logo shape color.',
            name: 'shapeColorInput'
        },
    ])
    .then((answers) => {
        console.log(answers);
    });