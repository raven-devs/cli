const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-short-hyphen.js -a=Jack -b=22 -cdf
 */

const argv = yargs(process.argv.slice(2)).argv;
console.log('argv', argv);
