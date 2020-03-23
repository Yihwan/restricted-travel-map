const csv = require('csv-parser');
const fs = require('fs');

const aggregateDataFilePath = 'src/data/aggregateData.csv';
const writeToFilePath = 'utils/constants/countries.js';

createIsoToNameMap = () => {
  const mapObj = {};

  fs.createReadStream(aggregateDataFilePath)
    .pipe(csv())
    .on('data', data => {
      const iso3 = data.ISO3; 

      mapObj[iso3] = data.name; 
    })
    .on('end', () => {
      console.log(mapObj);
    })
}


createNameToIsoMap = () => {
  const mapObj = {};

  fs.createReadStream(aggregateDataFilePath)
    .pipe(csv())
    .on('data', data => {
      const iso3 = data.ISO3;

      mapObj[data.name] = iso3;
    })
    .on('end', () => {
      console.log(mapObj);
    })
}

// createIsoToNameMap();

createNameToIsoMap();

