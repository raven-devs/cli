import chalk from 'chalk';
import ora from 'ora';
import { OraUtils } from './ora-utils';

/**
 * npx ts-node src/module/ora/ora-default.ts
 */

const spinner = ora();

async function main() {
  spinner.prefixText = '[main task]';
  spinner.start('Task1...');
  await OraUtils.doSmth(2000);
  spinner.succeed('Task1 done');

  spinner.prefixText = '[sub task]';
  spinner.indent = 2;
  spinner.start('Task1.1...');
  await OraUtils.doSmth(1000);
  spinner.succeed('Task1.1 done');

  spinner.prefixText = '[sub task]';
  spinner.indent = 2;
  spinner.start('Task1.2...');
  await OraUtils.doSmth(1000);
  spinner.fail(`${chalk.red.bold('Task1.2 not done')}`);

  spinner.prefixText = '[sub task]';
  spinner.indent = 2;
  spinner.start('Task1.3...');
  await OraUtils.doSmth(1000);
  spinner.warn('Task1.3 is missing');

  spinner.prefixText = '[sub task]';
  spinner.indent = 2;
  spinner.start('Task1.4...');
  await OraUtils.doSmth(1000);
  spinner.info('Task1.4 skipped');

  spinner.prefixText = '[main task]';
  spinner.indent = 0;
  spinner.start('Task2...');
  await OraUtils.doSmth(4000);
  spinner.succeed(`${chalk.green('Task2 done')}`);

  spinner.stop();
}

main()
  .then()
  .catch((e) => console.error(e));
