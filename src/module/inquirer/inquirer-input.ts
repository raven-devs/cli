import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-input.ts
 */

const questions = [
  {
    name: 'firstName',
    type: 'input',
    message: "What's your first name",
  },
  {
    name: 'lastName',
    type: 'input',
    message: "What's your last name",
    default() {
      return 'Doe';
    },
  },
  {
    name: 'phone',
    type: 'input',
    message: "What's your phone number",
    validate(value: string) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i,
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
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
