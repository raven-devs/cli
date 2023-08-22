const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-string-number-boolean.js --name=Jack --age=22 --employee
 */

const argv = yargs(process.argv.slice(2)).argv;
console.log('argv', argv);
