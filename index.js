var inquirer = require('inquirer');
var fs = require('fs');

var inquirer = require('inquirer');
inquirer
    .prompt([
        // Input prompts for user
        {
            type: 'input',
            message: 'Please enter up to three characters of text for your logo.',
            name: 'charInput',
            validate: function(input) {
                if (input.length > 3) {
                    return 'Must be 3 characters or less';
                } else if (input.length == 0) {
                    return 'Must enter at least 1 character'
                }
                else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal number for your logo text color.',
            name: 'textColorInput',
            validate: function(input) {
                if (input.length == 0) {
                    return 'Must Enter a color'
                }
                else {
                    return true;
                }
            }
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
            name: 'shapeColorInput',
            validate: function(input) {
                if (input.length == 0) {
                    return 'Selection cannot be empty'
                }
                else {
                    return true;
                }
            }
        },
    ])
    .then((answers) => {
        console.log(answers);      
    });