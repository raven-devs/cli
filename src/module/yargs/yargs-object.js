const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-object.js --user.firstName=Jack --user.lastName=London --user.address='building street, city post, country'
 */

const argv = yargs(process.argv.slice(2)).argv;
console.log('argv', argv);
