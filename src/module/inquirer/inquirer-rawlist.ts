import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-rawlist.ts
 */

const questions = [
  {
    name: 'theme',
    type: 'rawlist',
    message: 'What do you want to do?',
    choices: [
      'Order a pizza',
      'Make a reservation',
      new inquirer.Separator(),
      'Ask opening hours',
      'Talk to the receptionist',
    ],
  },
  {
    name: 'size',
    type: 'rawlist',
    message: 'What size do you need',
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
