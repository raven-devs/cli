const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-usage-example-epilog-version.js --help
 * node src/module/yargs/yargs-usage-example-epilog-version.js --h
 * node src/module/yargs/yargs-usage-example-epilog-version.js --version
 */

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 --name=[str] --age=[num]')
  .example('$0 --name=Jack --age=22', 'Display a given user info')
  .example('$0 --n=Jack --a=22', 'Display a given user info')

  .demandOption(['name'])

  .describe('name', 'User name')

  .describe('age', 'User age')
  .default('age', 18)
  .number('age')

  .alias('help', 'h')
  .alias('version', 'v')

  .epilog('For more information, find our manual at http://example.com').argv;
console.log('argv', argv);
