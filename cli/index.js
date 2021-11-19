// CLI

const { program } = require('commander');
const newProject = require('./commands/new.js');
const addFilter = require('./commands/addFilter.js');
const delFilter = require('./commands/delFilter.js');
const addStep = require('./commands/addStep.js');
const delStep = require('./commands/delStep.js');

program
    .command('new')
    .description('Créer un nouveau projet')
    .action(newProject);

program
    .command('add_filter')
    .description('Ajoute un filtre')
    .action(addFilter);

program
    .command('del_filter')
    .description('Supprime un filtre')
    .action(delFilter);

program
    .command('add_step')
    .description('Rajoute un step sur un filtre ainsi que son next step')
    .action(addStep);

program
    .command('del_step')
    .description('Supprime un step')
    .action(delStep);

program.parse();