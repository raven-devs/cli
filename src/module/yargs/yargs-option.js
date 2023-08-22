const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-option.js
 * node src/module/yargs/yargs-option.js --help
 * node src/module/yargs/yargs-option.js --name=Jack --age=22
 * node src/module/yargs/yargs-option.js --n=Jack --a=22
 * node src/module/yargs/yargs-option.js --name=Jack
 * node src/module/yargs/yargs-option.js --name=Jack --employee=not
 * node src/module/yargs/yargs-option.js --age=22
 * node src/module/yargs/yargs-option.js --name=Jack --age=London
 * node src/module/yargs/yargs-option.js --name=Jack --adr='building street, city post, country'
 */

const argv = yargs(process.argv.slice(2))
  .describe('name', 'User name')
  .alias('name', 'n')
  .string('name')

  .option('age', {
    describe: 'User age',
    alias: 'a',
    default: 18,
    demandOption: false,
    type: 'number', // string | number | boolean | array
  })

  .option('employee', {
    describe: 'If user is employee',
    demandOption: false,
    type: 'string',
    choices: ['yes', 'no'],
  })

  .option('old', {})
  .deprecateOption('old')

  .describe('address', 'User address')
  .alias('address', 'adr')
  .default('address', 'No address provided')
  .string('address')

  .demandOption(['name'], 'Please provide "name" argument to work with this tool').argv;
console.log('argv', argv);
