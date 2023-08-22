import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-recursive.ts
 */

const output: string[] = [];

const questions = [
  {
    name: 'tvShow',
    type: 'input',
    message: "What's your favorite TV show?",
  },
  {
    name: 'askAgain',
    type: 'confirm',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true,
  },
];

function ask() {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers.tvShow);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();
