const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-boolean.js --name --address
 * node src/module/yargs/yargs-boolean.js --name
 */

const argv = yargs(process.argv.slice(2)).boolean(['name', 'address']).argv;
console.log('argv', argv);
