const yargs = require('yargs/yargs');

/**
 * node src/module/yargs/yargs-command.js
 * node src/module/yargs/yargs-command.js --help
 * node src/module/yargs/yargs-command.js find-all-users --help
 * node src/module/yargs/yargs-command.js find-all-users
 * node src/module/yargs/yargs-command.js find-all-users --url=server.com/admin-users
 * node src/module/yargs/yargs-command.js save-user --help
 * node src/module/yargs/yargs-command.js save-user
 * node src/module/yargs/yargs-command.js save-user --url=server.com/admin-user/123e4567-e89b-12d3-a456-426614174000
 */

const findAllUsers = (argv) => {
  console.log('findAllUsers', argv.url);
};

const saveUser = (argv) => {
  console.log('saveUser', argv.url);
};

console.log('process.argv', process.argv);

yargs(process.argv.splice(2))
  .command(
    'find-all-users',
    'Find all users',
    function (yargs) {
      return yargs.option('url', {
        describe: 'the URL to make a GET HTTP request to',
        alias: 'u',
        default: 'server.com/users',
      });
    },
    findAllUsers,
  )
  .command(
    'save-user',
    'Save user',
    function (yargs) {
      return yargs.option('url', {
        describe: 'the URL to make a POST HTTP request to',
        alias: 'u',
        demandOption: true,
      });
    },
    saveUser,
  )
  .demandCommand(1, 1, 'Choose a command: find-all-users or save-user').argv;
