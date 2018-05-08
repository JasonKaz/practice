const Promise = require("bluebird");

const execP = Promise.promisify(require('child_process').exec);
const exec = require('child_process').exec;
const copyFile = Promise.promisify(require("fs").copyFile);
const rimraf =  Promise.promisify(require("rimraf"));
const mkdir = Promise.promisify(require("fs").mkdir);

const cleanServer = () => { return rimraf("./dist/server"); };
const cleanTests = () => { return rimraf("./dist/tests"); };
const createServer = () => { return mkdir("./dist/server"); };
const createTests = () => { return mkdir("./dist/tests"); };
const copyServer = () => { return copyFile("./src/server/app.js", "./dist/server/app.js"); };
const buildTests = () => { return execP("tsc -p ./src/www/spec/tsconfig.json"); };

cleanServer()
    .then(cleanTests)
    .then(createServer)
    .then(createTests)
    .then(copyServer)
    .then(buildTests)
    .then(() => {
        exec("node ./dist/server/app.js", (err, stdout, stderr) => {
            console.log(err, stdout, stderr);
        });
    });