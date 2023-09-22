import inquirer from 'inquirer';
import terminalLink from 'terminal-link';

/**
 * npx ts-node src/module/inquirer/inquirer-terminal-link.ts
 */

const questions = [
  {
    name: 'size',
    type: 'list',
    message: 'What size do you need?',
    choices: [
      'Jumbo',
      'Large',
      'Standard',
      'Medium',
      'Small',
      'Micro which is truly and surely the ' + terminalLink('Wikipedia: Micro', 'https://en.wikipedia.org/wiki/Micro-'),
    ],
    filter(value: string) {
      return value.toLowerCase();
    },
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('answers', answers);
  })
  .catch((error) => {
    console.error(error);
  });
