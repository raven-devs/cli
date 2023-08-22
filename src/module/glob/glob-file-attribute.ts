import { glob } from 'glob';

/**
 * npx ts-node src/module/glob/glob-file-attribute.ts
 */

async function main() {
  // filter by modified time, by permission mode, etc.
  const results = await glob('**/glob/*', {
    ignore: 'node_modules/**',
    stat: true,
    withFileTypes: true,
  });

  const timeSortedFiles = results
    .sort((a, b) => {
      if (!a.mtimeMs || !b.mtimeMs) {
        return 0;
      }
      return a.mtimeMs - b.mtimeMs;
    })
    .map((path) => path.fullpath());
  console.log({ timeSortedFiles });

  const readableFiles = results
    .filter((path) => {
      if (!path.mode) {
        return;
      }
      return path.mode & 0o040;
    })
    .map((path) => path.fullpath());

  console.log({ readableFiles });

  // find all files (not dirs) edited in the last hour
  const newFiles = await glob('**/glob/*', {
    stat: true,
    nodir: true,
    ignore: {
      ignored: (p) => {
        return new Date().getTime() - p.mtimeMs! > 60 * 60 * 1000;
      },
    },
  });
  console.log({ newFiles });
}

main()
  .then()
  .catch((e) => console.error(e));
