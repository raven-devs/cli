import ora from 'ora';
import { OraUtils } from './ora-utils';

/**
 * npx ts-node src/module/ora/ora-spinner.ts
 */

const spinner = ora({
  spinner: 'moon',
});

async function main() {
  spinner.start('Task1...');
  await OraUtils.doSmth(2000);
  spinner.succeed('Task1 done');

  spinner.stop();
}

main()
  .then()
  .catch((e) => console.error(e));
