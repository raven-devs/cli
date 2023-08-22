import { glob } from 'glob';

/**
 * npx ts-node src/module/glob/glob-ignore.ts
 */

async function main() {
  // ignore all markdown files, and all folders named 'docs'
  const pathes = await glob('**/glob/*', {
    ignore: {
      ignored: (p) => /\.md$/.test(p.name),
      childrenIgnored: (p) => p.isNamed('docs'),
    },
  });
  console.log({ pathes });
}

main()
  .then()
  .catch((e) => console.error(e));
