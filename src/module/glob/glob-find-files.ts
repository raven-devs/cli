/**
 * npx ts-node src/module/glob/glob-find-files.ts
 */

import { glob } from 'glob';

async function findDir(dirName: string, cwd: string) {
  try {
    // find 'node_modules' dirs in a cwd, ignore all other files inside 'node_modules'
    const result = await glob(`**/${dirName}/`, {
      cwd,
      ignore: '**/node_modules/**/*',
    });
    console.log({ [dirName]: result });
  } catch (error) {
    console.error(error);
  }
}

async function findFile(fileName: string, cwd: string) {
  try {
    // find $fileName file in a cwd, ignore 'node_modules'
    const result = await glob(`**/${fileName}`, {
      cwd,
      ignore: '**/node_modules/**/*',
    });
    console.log({ [fileName]: result });
  } catch (error) {
    console.error(error);
  }
}

findDir('doc', '/Users/spetushkou/Projects')
  .then()
  .catch((e) => console.error(e));
