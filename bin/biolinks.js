#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const fs = require('fs');
const path = require('path');

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    textAlignment: 'center',
};

try {
    const result = fs.readFileSync(path.resolve(__dirname, "../info.json"));
    const userData = JSON.parse(res);

    const {
        first_name,
        last_name,
        current_status,
        github_link,
        linkedin_link,
    } = userData;

    const styledData = {
        firstName: chalk.blue.bold(first_name),
        lastName: chalk.blue.bold(last_name),
        currentStatus: chalk.blue.bold(current_status),
        labelGithub: chalk.blue.bold("Github: "),
        gitHub: chalk.blue(github_link),
        labelLinkedin: chalk.blue.bold("Linkedin: "),
        linkedIn: chalk.blue(linkedin_link),
    };

    const newline = "\n";

    const output = 
        newline + 
        `${styledData.firstName} ${styledData.lastName}` +
        newline +
        newline +
        `${styledData.currentStatus}` +
        newline +
        `${styledData.labelGithub} ${styledData.gitHub}` +
        newline +
        `${styledData.labelLinkedin} ${styledData.linkedIn}`;

        console.log(chalk.green.bold(boxen(output, options)));

}   catch (err) {
    console.log(chalk.red.bold('Cannot read data.json file!'));
}