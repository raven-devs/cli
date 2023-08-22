import BottomBar from 'inquirer/lib/ui/bottom-bar';
import { spawn } from 'node:child_process';

/**
 * npx ts-node src/module/inquirer/inquirer-bottom-bar.ts
 */

const loader = ['/ Installing', '| Installing', '\\ Installing', '- Installing'];
let i = 4;
const ui = new BottomBar({ bottomBar: loader[i % 4] });

const interval = setInterval(() => {
  ui.updateBottomBar(loader[i++ % 4]);
}, 300);

const cmd = spawn('npm', ['run', 'audit'], { stdio: 'pipe' });
cmd.stdout.pipe(ui.log);
cmd.on('close', () => {
  clearInterval(interval);
  ui.updateBottomBar('Npm audit done!\n');
  process.exit(0);
});
