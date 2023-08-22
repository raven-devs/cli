const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-non-hypen.js Jack London
 */

const argv = yargs(process.argv.slice(2)).argv;
console.log('argv', argv);
