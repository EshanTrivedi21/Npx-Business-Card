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
    } = userData;

    const styledData = {
        firstName: chalk.blue.bold(first_name),
        lastName: chalk.blue.bold(last_name),
        currentStatus: chalk.blue.bold(current_status),
    };

    const newline = "\n";

    const output =  
        `${styledData.firstName} ${styledData.lastName}` +
        newline + newline +
        `${styledData.currentStatus}`;

    const options = {
        padding: 1,
        margin: 1,
        textAlignment: 'center',
    };

    console.log(chalk.bgGreen.bold(boxen(output, options)));

}   catch (err) {
    console.log(chalk.bgRed.bold(`Cannot read ${styledDataFilename} file!`));
    console.log(chalk.bgRed.bold(err.message));
}