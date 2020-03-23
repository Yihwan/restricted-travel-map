const countries = require('./constants/countries.js');
const csv = require('csv-parser');
const fs = require('fs');

const aggregateDataFilePath = 'src/data/aggregateData.csv';
const mdWriteToFilePath = 'src/data/countries/';

// TODO: Refactor this mess later.
// Or maybe never because this should only be run once to seed country MD files. 

const generateMarkdownFiles = () => {
  console.log(`Starting markdown generation ...`)
  const rowData = []

  fs.createReadStream(aggregateDataFilePath)
    .pipe(csv())
    .on('data', data => {
      const countryObj = {} 

      countryObj.ISO3 = data.ISO3 
      countryObj.title = data.name
      countryObj.isInboundRestricted = data.isInboundRestricted === "TRUE" ? true : false 
      countryObj.isInboundLandRestricted = data.isInboundLandRestricted === "TRUE" ? true : false 
      countryObj.isInboundCompletelyRestricted = data.isInboundCompletelyRestricted === "TRUE" ? true : false 

      let inboundRestrictedCountriesISO3 = [] 
      const inboundRestrictedCountryNamesArr = data.inboundRestrictedCountryNamesRaw.split(',').map(str => str.trim())
      const restrictedCountriesContainsNot = inboundRestrictedCountryNamesArr.some(name => name.includes('Not'));

      if (!countryObj.isInboundCompletelyRestricted && restrictedCountriesContainsNot) {
        inboundRestrictedCountriesISO3 = Object.keys(countries.isoNameMap);

        inboundRestrictedCountryNamesArr.forEach(name => {
          if (name === 'NotEurope') {
            inboundRestrictedCountriesISO3 = inboundRestrictedCountriesISO3.filter(iso => (
              !countries.europeISO3.includes(iso)
            ));
            return; 
          }

          if (name === 'NotUS') {
            inboundRestrictedCountriesISO3 = inboundRestrictedCountriesISO3.filter(iso => (
              iso !== 'USA'
            ));
            return; 
          }

          const excludedCountry = name.split('Not').filter(country => country !== '')[0];

          inboundRestrictedCountriesISO3 = inboundRestrictedCountriesISO3.filter(iso => (
            iso !== countries.nameIsoMap[excludedCountry]
          ));
        })
      } 

      if (!countryObj.isInboundCompletelyRestricted && !restrictedCountriesContainsNot) {
        inboundRestrictedCountryNamesArr.forEach(name => {
          if (name === '') {
            return; 
          }
  
          if (name === 'Europe') {
            inboundRestrictedCountriesISO3.concat(countries.europeISO3);
            return;
          }
  
          if (!countries.countryNames.includes(name)) {
            console.log(`WARN: Restricted ${name} not found for country ${data.name}`);
            return; 
          }
  
          inboundRestrictedCountriesISO3.push(countries.nameIsoMap[name]);
        });
      }

      if (countryObj.isInboundCompletelyRestricted) {
        inboundRestrictedCountriesISO3 = Object.keys(countries.isoNameMap);
      }

      countryObj.inboundRestrictedCountriesISO3 = inboundRestrictedCountriesISO3;

      rowData.push(countryObj);
    })
    .on('end', () => {
      rowData.forEach(data => {
        const frontmatter = 
`---
title: "${data.title}"
ISO3: "${data.ISO3}"
isInboundRestricted: ${data.isInboundRestricted}
isInboundLandRestricted: ${data.isInboundLandRestricted}
isInboundCompletelyRestricted: ${data.isInboundCompletelyRestricted}
inboundRestrictedCountriesISO3: [${data.inboundRestrictedCountriesISO3.map(iso => `"${iso}"`)}]
---
`;

        const initialContent = 
`
# ${data.title}

* ${!data.isInboundRestricted ? `There is no travel restriction data available for ${data.title}.` : `${data.title} has reportedly imposed travel restrictions.`}
`; 

        const footer = 
`
*DISCLAIMER*: Enter disclaimer text here.
`;

        const filename = data.title.split(' ').join('').concat('.md');

        try {
          fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, frontmatter)
          fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, initialContent)

          if (data.isInboundLandRestricted) {
            fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, `* ${data.title} may have imposed additional travel restrictions on land borders.\n`)
          }

          if (data.isInboundCompletelyRestricted) {
            fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, `* ${data.title} is reported to have completely shut down inbound travel.\n`)
          }

          if (data.inboundRestrictedCountriesISO3.length > 0) {
            const restrictedCountrySection =
`
## Restricted Countries 
${data.title} has reportedly restricted travel from at least ${data.inboundRestrictedCountriesISO3.length} countries: ${data.inboundRestrictedCountriesISO3.sort().map(iso => countries.isoNameMap[iso]).join(', ')}
`;
            fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, restrictedCountrySection)
          }

          fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, footer)
        } catch(error) {
          console.log(error)
        }
    })
  });
};

generateMarkdownFiles()