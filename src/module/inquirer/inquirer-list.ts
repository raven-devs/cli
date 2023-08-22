import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-list.ts
 */

const questions = [
  {
    name: 'theme',
    type: 'list',
    message: 'What do you want to do?',
    choices: [
      'Order a pizza',
      'Make a reservation',
      new inquirer.Separator(),
      'Ask for opening hours',
      {
        name: 'Contact support',
        disabled: 'Unavailable at this time',
      },
      'Talk to the receptionist',
    ],
  },
  {
    name: 'size',
    type: 'list',
    message: 'What size do you need?',
    choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
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
