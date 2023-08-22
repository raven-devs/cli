const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-default.js --x=4
 * node ts-node src/module/yargs/yargs-default.js --x=4 --y=7
 */

const argv = yargs(process.argv.slice(2)).default('x', 10).default('y', 10).argv;
console.log('argv', argv);
