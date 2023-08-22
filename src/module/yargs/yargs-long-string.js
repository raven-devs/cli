const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-long-string.js --address='building street, city post, country'
 * node src/module/yargs/yargs-long-string.js --address='"building street, city post, country"'
 */

const argv = yargs(process.argv.slice(2)).argv;
console.log('argv', argv);
