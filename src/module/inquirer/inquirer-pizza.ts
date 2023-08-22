import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-pizza.ts
 */

console.log('Hi, welcome to Node Pizza');

const questions = [
  {
    name: 'toBeDelivered',
    type: 'confirm',
    message: 'Is this for delivery?',
    default: false,
    transformer: (answer: string) => (answer ? '👍' : '👎'),
  },
  {
    name: 'phone',
    type: 'input',
    message: "What's your phone number?",
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
  {
    name: 'size',
    type: 'list',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(value: string) {
      return value.toLowerCase();
    },
  },
  {
    name: 'quantity',
    type: 'input',
    message: 'How many do you need?',
    validate(value: string) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    name: 'toppings',
    type: 'expand',
    message: 'What about the toppings?',
    choices: [
      {
        name: 'Pepperoni and cheese',
        key: 'p',
        value: 'PepperoniCheese',
      },
      {
        name: 'All dressed',
        key: 'a',
        value: 'alldressed',
      },
      {
        name: 'Hawaiian',
        key: 'w',
        value: 'hawaiian',
      },
    ],
  },
  {
    name: 'beverage',
    type: 'rawlist',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    name: 'comments',
    type: 'input',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    name: 'prize',
    type: 'list',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers: any) {
      return answers.comments !== 'Nope, all good!';
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
