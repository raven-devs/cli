const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-array.js --name=Jack --name=Oliver --name=Davit
 */

const argv = yargs(process.argv.slice(2)).argv;
console.log('argv', argv);
