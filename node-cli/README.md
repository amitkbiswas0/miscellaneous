# NLS

`nls` is a simple implementation of the `ls` linux command using [node.js](https://nodejs.dev/). It can show the contents of any directory upon running `nls` in terminal in that directly. Output is color coded. Green results are `files`, Yellow results are `folders/directories` and Red otherwise.

## To install :

- Download `index.js` and `package.json` in the same folder.
- Open terminal and run `cd path_to_your_folder_here`
- Run `npm install && npm link`

## Tools used :

- [node.js](https://nodejs.dev/) and [npm](https://www.npmjs.com/) for building and packaging
- [chalk](https://www.npmjs.com/package/chalk) for output coloring
