const fs = require ('fs');
const path = require ('path');
const { employeeEntry, managerData, engineerData, internData } = require('./helperUtilities/employeeEntry.js');
const { createHTML } = require('./helperUtilities/htmlCreator.js');

function writeFile (data) {
    fs.writeFile("index.html", data,
    (err) => err ? console.error(err) : console.log('Employee cards have been created.'))
}

async function doIt () {
    await employeeEntry();
    writeFile(createHTML(managerData, engineerData, internData));
}

doIt();
