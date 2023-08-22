import chalk from 'chalk';

/**
 * npx ts-node src/module/chalk/chalk.ts
 */

console.log(chalk.bold('bold'));
console.log(chalk.dim('dim'));
console.log(chalk.underline('underline'));
console.log(chalk.italic('italic'));
console.log(chalk.inverse('inverse'));
console.log(chalk.strikethrough('strikethrough'));

console.log(chalk.black('black'));
console.log(chalk.red('red'));
console.log(chalk.green('green'));
console.log(chalk.yellow('yellow'));
console.log(chalk.blue('blue'));
console.log(chalk.magenta('magenta'));
console.log(chalk.cyan('cyan'));
console.log(chalk.white('white'));
console.log(chalk.gray('gray'));

console.log(chalk.bgBlack('bgBlack'));
console.log(chalk.bgRed('bgRed'));
console.log(chalk.bgGreen('bgGreen'));
console.log(chalk.bgYellow('bgYellow'));
console.log(chalk.bgBlue('bgBlue'));
console.log(chalk.bgMagenta('bgMagenta'));
console.log(chalk.bgCyan('bgCyan'));
console.log(chalk.bgWhite('bgWhite'));
console.log(chalk.bgGray('bgGray'));

console.log(chalk.bold.underline.blue.bgYellow('combined'));
