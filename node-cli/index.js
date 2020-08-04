#!/usr/bin/env node

const { readdir, lstat } = require("fs").promises;
const path = require("path");
const chalk = require("chalk");

(async () => {
  try {
    const targetDir = process.argv[2] || process.cwd();
    const filenames = await readdir(targetDir);

    console.log();
    filenames.forEach(async (filename) => {
      const stat = await lstat(path.join(targetDir, filename));
      if (stat.isDirectory()) {
        process.stdout.write(`${chalk.yellow.bold(filename)}\n`);
      } else if (stat.isFile()) {
        process.stdout.write(`${chalk.green.bold(filename)}\n`);
      } else {
        console.log(chalk.red(filename));
      }
    });
  } catch (error) {
    console.log(error);
  }
})();
