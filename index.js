#!/usr/bin/env node

import select from '@inquirer/select';
import { input } from '@inquirer/prompts';
import clipboard from 'clipboardy';
import chalk from 'chalk';
import boxen from 'boxen';
import moment from 'moment';
import gradient from 'gradient-string';

import { logo } from './src/logo.js';
import { MATCH_TIME_IN_MINUTES, validateTimeFormat } from './src/util.js';
import { getCalendarEventURL } from './src/calendarService.js';
import { getMatchDayChoices } from './src/formService.js';
import { getRandomSalut } from './src/salutService.js';

logo();

const date = await select({
    message: 'Which day?',
    choices: getMatchDayChoices(),
});

console.log();

const timeString = await input({
    message: 'At what time (HH:mm)?',
    validate: validateTimeFormat,
});

console.log();

const time = moment(timeString, 'HH:mm');
const beginDate = date.add(time.minutes(), 'minutes').add(time.hours(), 'hours');
const endDate = moment(beginDate).add(MATCH_TIME_IN_MINUTES, 'minutes');

const template = `
:spiral_calendar_pad: ${beginDate.format('dddd (DD/MM)')}
:alarm_clock: ${beginDate.format('HH:mm')}h - ${endDate.format('HH:mm')}h
:round_pushpin: [Padel Encosta do Sol (Alfornelos)](https://maps.app.goo.gl/EYG5XpVD1H2RRNMa9)
:money_with_wings: 30 € split by the number of players
If you’re in, react with :tennis:
[Click here to add the event to your calendar](${getCalendarEventURL(beginDate, endDate)})
`;

clipboard.writeSync(template);
console.log(`${chalk.green.bold('Coppied text to clipboard:')}`);
console.log(chalk(template));

console.log();
console.log(boxen(chalk.bold(gradient.retro(`All done! Have a nice day ${getRandomSalut()} :)`)), { margin: 1, padding: 1 }));
