import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-expand.ts
 */

const questions = [
  {
    name: 'overwrite',
    type: 'expand',
    message: 'Conflict on `file.js`: ',
    choices: [
      {
        name: 'Overwrite',
        key: 'y',
        value: 'overwrite',
      },
      {
        name: 'Overwrite this one and all next',
        key: 'a',
        value: 'overwrite_all',
      },
      {
        name: 'Show diff',
        key: 'd',
        value: 'diff',
      },
      new inquirer.Separator(),
      {
        name: 'Abort',
        key: 'x',
        value: 'abort',
      },
    ],
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
