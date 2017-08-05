import task = require('vsts-task-lib');
import path = require('path');

task.setResourcePath(path.join(__dirname, 'task.json'));

async function run() {
    let firstName: string = task.getInput('FirstName', true);
    let lastName: string = task.getInput('LastName');

    // Logic for the custom task
    console.log(`Hello, ${firstName} ${lastName}`);
    console.info('Custom Task Completed.');
}

run();