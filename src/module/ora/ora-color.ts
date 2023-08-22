import ora from 'ora';
import { OraUtils } from './ora-utils';

/**
 * npx ts-node src/module/ora/ora-color.ts
 */

const spinner = ora({
  color: 'red',
});

async function main() {
  spinner.start('Task1...');
  await OraUtils.doSmth(2000);
  spinner.succeed('Task1 done');

  spinner.start('Task2...');
  await OraUtils.doSmth(4000);
  spinner.succeed('Task2 done');

  spinner.stop();
}

main()
  .then()
  .catch((e) => console.error(e));
