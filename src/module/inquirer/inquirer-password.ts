import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-password.ts
 */

const requireLetterAndNumber = (value: string) => {
  if (/\w/.test(value) && /\d/.test(value)) {
    return true;
  }

  return 'Password need to have at least a letter and a number';
};

const questions = [
  {
    name: 'password1',
    type: 'password',
    message: 'Enter a password',
    validate: requireLetterAndNumber,
  },
  {
    name: 'password2',
    type: 'password',
    message: 'Enter a masked password',
    mask: '*',
    validate: requireLetterAndNumber,
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
