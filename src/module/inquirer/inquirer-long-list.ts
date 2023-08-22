import inquirer from 'inquirer';

/**
 * npx ts-node src/module/inquirer/inquirer-long-list.ts
 */

const choices: any = Array.apply(0, new Array(26)).map((x, y) => String.fromCharCode(y + 65));
choices.push('Multiline option 1\n  super cool feature \n  more lines');
choices.push('Multiline option 2\n  super cool feature \n  more lines');
choices.push('Multiline option 3\n  super cool feature \n  more lines');
choices.push('Multiline option 4\n  super cool feature \n  more lines');
choices.push('Multiline option 5\n  super cool feature \n  more lines');
choices.push(new inquirer.Separator());
choices.push('Multiline option \n  super cool feature');
choices.push({
  name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  value: 'foo',
  short: 'The long option',
});

const questions = [
  {
    name: 'letter',
    type: 'list',
    loop: false,
    message: "What's your favorite letter?",
    choices,
  },
  {
    name: 'name',
    type: 'checkbox',
    message: 'Select the letter contained in your name:',
    choices,
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
