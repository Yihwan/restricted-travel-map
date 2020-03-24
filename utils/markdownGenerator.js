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
# <h2 class="ModalContent__Header">${data.title}</h2>

* ${!data.isInboundRestricted ? `<div class="Badge ModalContent__Badge--NoRestrictions">No restrictions reported</div>` : `<div class="Badge ModalContent__Badge--PartialRestrictions">Restrictions reported</div>`}
`; 

        const footer = 
`
<br/><p><strong>DISCLAIMER:</strong> Enter disclaimer text here.</p>
`;
        const submissions =
`
<h3 class="ModalContent__SubHeader">Share your story</h3>
<p>Would you like to share how travel restrictions have affected you? Has the situation changed from what is currently on this map? <br/><br/><strong>Submit your story or any corrections <a href="" target="_blank" rel="noopener">https://forms.gle/9WuvQPAHg4ReRZLN6</a><strong></p>
`;

        const filename = data.title.split(' ').join('').concat('.md');

        try {
          fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, frontmatter)
          fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, initialContent)

          if (data.isInboundLandRestricted) {
            fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, `* <div class="Badge ModalContent__Badge--LandRestrictions">Land border restrictions reported</div>\n`)
          }

          if (data.isInboundCompletelyRestricted) {
            fs.appendFileSync(`${mdWriteToFilePath}/${filename}`, `* <div class="Badge ModalContent__Badge--CompleteRestrictions">Entry may be completely restricted</div>\n`)
          }

          if (data.inboundRestrictedCountriesISO3.length > 0) {
            const restrictedCountrySection =
`
## <h3 class="ModalContent__SubHeader">Restricted Countries</h3>
<p>${data.title} has reportedly restricted travel from at least <strong>${data.inboundRestrictedCountriesISO3.length}</strong> countries: ${data.inboundRestrictedCountriesISO3.sort().map(iso => countries.isoNameMap[iso]).join(', ')}</p>
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