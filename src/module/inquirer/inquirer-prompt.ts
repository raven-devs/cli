import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-prompt.ts
 */

inquirer
  .prompt([
    {
      name: 'name',
      type: 'string',
      message: 'What is your name?',
    },
  ])
  .then((answers) => {
    console.log('answers', answers);
  })
  .catch((error) => {
    console.error(error);
  });
