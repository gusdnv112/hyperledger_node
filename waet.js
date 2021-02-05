const fs = require('fs');

const jsonFile = fs.readFileSync('json/testWaetInfo.json', 'utf8');
console.log(jsonFile);

const jsonData = JSON.parse(jsonFile);
console.log(jsonData);

const arg1 = jsonData.param.arg1;
console.log(arg1)