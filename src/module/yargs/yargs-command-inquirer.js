const yargs = require('yargs/yargs');
const inquirer = require('inquirer');

/**
 * node src/module/yargs/yargs-command-inquirer.js ask
 * node src/module/yargs/yargs-command-inquirer.js sing
 */

const sing = () => console.log('🎵 Oy oy oy');

const ask = async () => {
  const answers = await inquirer.prompt([
    {
      name: 'name',
      type: 'string',
      message: 'What is your name?',
    },
  ]);

  console.log(`Hello, ${answers.name}!`);
};

yargs(process.argv.splice(2))
  .command('ask', 'use inquirer to prompt for your name', {}, ask)
  .command('sing', 'a classic yargs command without prompting', {}, sing).argv;
