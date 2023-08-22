import chalk from 'chalk';
import figlet from 'figlet';

/**
 * npx ts-node src/module/figlet/figlet.ts
 */

console.log(figlet.textSync('Hello World!!!'));

console.log(
  chalk.green.bold(
    figlet.textSync('Boo!', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true,
    }),
  ),
);
