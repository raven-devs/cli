import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-editor.ts
 */

const questions = [
  {
    name: 'bio',
    type: 'editor',
    message: 'Please write a short bio of at least 3 lines.',
    validate(text: string) {
      if (text.split('\n').length < 3) {
        return 'Must be at least 3 lines.';
      }

      return true;
    },
    waitUserInput: true,
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
