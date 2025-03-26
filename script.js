const fs = require ('fs');
const csvtojson = require('csvtojson');

const csvFilePath = 'currency.csv';
const jsonFilePath ='output.json';

csvtojson()
.fromFile(csvFilePath)
.then((jsonObj) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2));
    console.log('CSV file has been converted to JSON successfully!');
})
.catch((error) => {
    console.error('Error converting CSV to JSON', error );
});