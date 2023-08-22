import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-validate-progress.ts
 */

const questions = [
  {
    name: 'first_question',
    type: 'input',
    message: 'Question with filtering and validating text',
    async validate() {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    validatingText: 'Validating what you wrote...',
    async filter(answer: string) {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
    },
    filteringText: 'Filtering your answer...',
  },
  {
    type: 'input',
    name: 'second_question',
    message: 'Question without filtering and validating text',
    async validate() {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    async filter(answer: string) {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
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
