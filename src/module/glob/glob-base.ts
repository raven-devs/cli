import { glob } from 'glob';

/**
 * npx ts-node src/module/glob/glob-base.ts
 */

async function main() {
  // all .ts files, but don't look in node_modules,
  // pass in a signal to cancel the glob walk after 10 seconds
  const pathes = await glob('**/*.ts', {
    ignore: 'node_modules/**',
    signal: AbortSignal.timeout(10 * 1000),
  });
  console.log({ pathes });
}

main()
  .then()
  .catch((e) => console.error(e));
