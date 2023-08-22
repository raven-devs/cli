const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-force-type.js --firstName=Jack --lastName=London --address='building street, city post, country' --age=22 --employee
 * node src/module/yargs/yargs-force-type.js --firstName=22 --lastName=London --age=Jack --employee
 * node src/module/yargs/yargs-force-type.js --firstName --lastName=London --age=22 --employee=Jack
 * node src/module/yargs/yargs-force-type.js --firstName --lastName=London --age --employee=22
 */

const argv = yargs(process.argv.slice(2))
  .string(['firstName', 'lastName', 'address'])
  .number('age')
  .boolean('employee').argv;
console.log('argv', argv);
