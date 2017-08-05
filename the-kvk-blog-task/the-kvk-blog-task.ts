import task = require('vsts-task-lib');
import path = require('path');

task.setResourcePath(path.join(__dirname, 'task.json'));

async function run() {
    
}

run();