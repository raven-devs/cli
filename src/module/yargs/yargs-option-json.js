const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-option-json.js --config=./src/module/yargs/yargs-option.json
 */

const argv = yargs(process.argv.slice(2)).config().argv;
console.log('argv', argv);
