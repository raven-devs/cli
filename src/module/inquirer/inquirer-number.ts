import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-number.ts
 */

const questions = [
  {
    name: 'age',
    type: 'number',
    message: "What's your age",
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
