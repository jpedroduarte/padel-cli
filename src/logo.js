import boxen from 'boxen';
import chalk from 'chalk';
import gradient from 'gradient-string';

const ascii = `
888     888 888       888     8888888b.               888          888 
888     888 888   o   888     888   Y88b              888          888 
888     888 888  d8b  888     888    888              888          888 
Y88b   d88P 888 d888b 888     888   d88P 8888b.   .d88888  .d88b.  888 
 Y88b d88P  888d88888b888     8888888P"     "88b d88" 888 d8P  Y8b 888 
  Y88o88P   88888P Y88888     888       .d888888 888  888 88888888 888 
   Y888P    8888P   Y8888     888       888  888 Y88b 888 Y8b.     888 
    Y8P     888P     Y888     888       "Y888888  "Y88888  "Y8888  888
`;

export const logo = () => {
  console.log(
    boxen(
      chalk.bold(
        gradient(['#f2e995', '#cfe1a3', '#7f93a8', '#6DB8C2']).multiline(ascii)
      ),
      {
        margin: 1,
        padding: 2,
      }
    )
  );
};
