const yargs = require('yargs/yargs');

/**
 * MY_PROGRAM_SERVER_URL=localhost node src/module/yargs/yargs-env-file.js
 */

const argv = yargs(process.argv.slice(2)).env('MY_PROGRAM').argv;
console.log('argv', argv);
