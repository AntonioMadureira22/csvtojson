const fs = require ('fs');
const csvtojson = require('csvtojson');

const csvFilePath = '';
const jsonFilePath ='';

csvtojson()
.fromFile(csvFile)
.then((jsonObj) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2));
    console.log('CSV file has been converted to JSON successfully!');
})
