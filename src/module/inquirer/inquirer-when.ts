import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-when.ts
 */

const questions = [
  {
    name: 'bacon',
    type: 'confirm',
    message: 'Do you like bacon?',
  },
  {
    name: 'favorite',
    type: 'input',
    message: 'Bacon lover, what is your favorite type of bacon?',
    when(answers: any) {
      return answers.bacon;
    },
  },
  {
    name: 'pizza',
    type: 'confirm',
    message: 'Ok... Do you like pizza?',
    when(answers: any) {
      return !likesFood('bacon')(answers);
    },
  },
  {
    type: 'input',
    name: 'favorite',
    message: 'Whew! What is your favorite type of pizza?',
    when: likesFood('pizza'),
  },
];

function likesFood(aFood: any) {
  return function (answers: any) {
    return answers[aFood];
  };
}

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('answers', answers);
  })
  .catch((error) => {
    console.error(error);
  });
