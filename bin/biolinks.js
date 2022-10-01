#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const styledDataFilename = '../info.json' 

try {
    const result = fs.readFileSync(path.resolve(__dirname, `${styledDataFilename}`));
    const userData = JSON.parse(result);

    const {
        first_name,
        last_name,
        current_status,
        github,
        linkedin
    } = userData;

    const styledData = {
        firstName: chalk.blueBright.bold(first_name),
        lastName: chalk.blueBright.bold(last_name),
        currentStatus: chalk.blueBright.bold(current_status),
        gitHub: chalk.blueBright.bold(github),
        linkedIn: chalk.blueBright.bold(linkedin)
    };

    const newline = "\n";

    const output =  
        `${styledData.firstName} ${styledData.lastName}` +
        newline + newline +  newline +
        `${styledData.currentStatus}` +
        newline + newline +
        `${styledData.gitHub}` +
        newline +  newline +
        `${styledData.linkedIn}`;

    const options = {
        padding: 2.5,
        margin: 3,
        textAlignment: 'center',
    };

    console.log(chalk.blueBright.bold(boxen(output, options)));

}   catch (err) {
    console.log(chalk.red.bold(`Cannot read ${styledDataFilename} file!`));
    console.log(chalk.red.bold(err.message));
}