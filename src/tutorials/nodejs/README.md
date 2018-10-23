# Setup a new project

## Prerequisites
This assumes you have installed [node.js](https://nodejs.org/en/) on your system. Check by using the following command in a terminal.

```bash
node -v
```

If you see `command not found: node` then node.js is missing. Install it before proceeding.
Node.js comes with [npm](https://www.npmjs.com/), package manager for JavaScript. Another alternative is [yarn](https://yarnpkg.com/en/). To check you `npm` installed, run the following command in a terminal.
```bash
npm -v
```

## Initialize node project
- First lets go to your tutorial directory.
```bash
cd ~/tutorials
```
- Create a new directory for our node.js project and enter it.
```bash
mkdir node-init && cd node-init
```
- Create a new `package.json` for our project.
```bash
npm init -y
```
::: tip
`-y` is a npm flag which just defaults all the answers to `Y` or yes in `npm init` prompts. The `package.json` file can be edited later on. This allows us to quickly set up. More info about `package.json` [here](https://docs.npmjs.com/files/package.json).
:::

## Creating first file
Now that we have our initial setup complete, we can finally start writing code. At this point, it's wise to open this folder in your code editor. The folder should contain just one single file, `package.json` which we created in the previous step. 
- Create a new file in root.
```bash
touch index.js
```
- Write some JavaScript in it.
```js
console.log('Hello world!');
```
- Save the file.
- Execute the file.
```bash
node index.js
```
- You should see the following output:
```txt
Hello world!
```
