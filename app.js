var fs = require("fs");
var fileList = [];
var filterList = [];
const dir = "./filters";
const config = './config-filters.json';
let configData = Object;
let extension;

try {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(function (file) {
            extension = file.split('.').pop();
            if(extension == 'js') {
                file = `${dir}/${file}`;
                fileList.push(file);
                if (require(file) instanceof Function) filterList.push(require(file));
                else console.error(`${file} n'a pas de fonction`);
            } else {
                console.log(`${file} n'est pas un fichier js`)
                process.exit(1);
            }
        });
    }else{
       console.log(`Le dossier ${dir} n'existe pas`);
       process.exit(1);
    }
  } catch(err) {
    console.error(err)
  }

try {
    if (fs.existsSync(config)) {
        fs.readFile(config, (err, data) => {
            if (err) {
                console.error(`Erreur lecture ${config}`); 
                process.exit(1);
            };
            configData = JSON.parse(data);
            //console.log(configData);
            //console.log(typeof(configData));
            //console.log(configData.steps);
        
            //vérification du config
            steps = configData.steps
            if (steps == {}) {
                console.error(`Le fichier ${config} n'a pas de steps`);
                process.exit(1);
            }
            else { //vérification des steps et nom de filters
                for (let step = 1; step <= Object.keys(steps).length; step++) {
                    thisStep = steps[step.toString()];
                    if (thisStep.filter == '') {
                        console.error(`Le filtre numéro ${step} n'a pas de nom filter`); 
                        process.exit(1);
                    };
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
    }else{
       console.log(`Le fichier ${config} n'existe pas`);
       process.exit(1);
    }
  } catch(err) {
    console.error(err)
 }