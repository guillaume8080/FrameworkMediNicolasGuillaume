var fs = require("fs");
var fileList = [];
var filterList = [];
const dir = "./filters";
const config = './config-filters.json';
let configData;

fs.readdirSync(dir).forEach(function(file) {

    file = `${dir}/${file}`;
    fileList.push(file);
    if (require(file) instanceof Function) filterList.push(require(file));
    else console.error(`${file} n'a pas de fonction`);

});

fs.readFile(config, (err, data) => {
    if (err) console.error(`erreur lecture config json`);
    configData = JSON.parse(data);
    console.log(configData);
});