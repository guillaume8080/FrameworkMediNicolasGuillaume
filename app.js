var fs = require("fs");
var fileList = [];
var filterList = [];
const dir = "./filters";
const config = './config-filters.json';
let configData = Object;

fs.readdirSync(dir).forEach(function (file) {

    file = `${dir}/${file}`;
    fileList.push(file);
    if (require(file) instanceof Function) filterList.push(require(file));
    else console.error(`${file} n'a pas de fonction`);

});

fs.readFile(config, (err, data) => {
    if (err) console.error(`erreur lecture config json`);
    configData = JSON.parse(data);
    //console.log(configData);
    //console.log(typeof(configData));
    //console.log(configData.steps);

    //vérification du config
    steps = configData.steps
    if (steps == {}) console.error("le fichier config n'a pas de steps");
    else { //vérification des steps et nom de filters
        for (let step = 1; step <= Object.keys(steps).length; step++) {
            thisStep = steps[step.toString()];
            if (thisStep.filter == '') console.error(`le filtre numéro ${step} n'a pas de nom filter`);
        }

        let filterOrder = [];
        let nextStep;
        filterOrder.push(steps['1'].filter);

        if (steps['1'].next != "") {
            nextStep = steps['1'].next;
            while (nextStep > 0) {
                filterOrder.push(steps[nextStep].filter);
                nextStep = steps[nextStep].next || 0;
            }
        } 

        filterOrder.forEach((f) => {
            console.log(`Exécution du filter ${f}`);
        });

    }

});