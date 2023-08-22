import { Glob } from 'glob';

/**
 * npx ts-node src/module/glob/glob-stream.ts
 */

function main() {
  const globObj = new Glob('**/glob', { ignore: 'node_modules/**', withFileTypes: true });
  globObj.stream().on('data', (path) => {
    console.log(
      'got a path object',
      path.fullpath(),
      path.isDirectory(),
      path.readdirSync().map((e) => e.name),
    );
  });
}

main();
