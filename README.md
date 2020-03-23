# Restricted Travel Map 

## Next Steps 
* Test markdown with one country 
* Create CSV 
* Use CSV to render initial map. 
* Use CSV To generate individual markdown files. 

### UI Notes 
* No tooltip (on click will reveal new modal)
* Clicking on country highlights restricted countries
* Maybe expand to pages eventually if sufficient content 

```
query MyQuery {
  allMarkdownRemark(
        filter: {
      frontmatter: {ISO3: {eq: "USA"}}
    }
  ) {
    edges {
      node {
        frontmatter {
          ISO3
          inboundRestrictedCountryNames
          isInboundCompletelyRestricted
          isInboundRestricted
          title
        }
        html
      }
    }
  }
}
```


```
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        ISO3
        inboundRestrictedCountryNames
        isInboundCompletelyRestricted
        isInboundRestricted
        title
      }
    }
  }
}
```


// NAME: "United States of America"
// NAME_LONG: "United States"
// ABBREV: "U.S.A."
// FORMAL_EN: "United States of America"
// POP_EST: 326625791
// POP_RANK: 17
// GDP_MD_EST: 18560000
// POP_YEAR: 2017
// GDP_YEAR: 2016
// ISO_A2: "US"
// ISO_A3: "USA"
// CONTINENT: "North America"
// REGION_UN: "Americas"
// SUBREGION: "Northern America"

// ISO3: "PER"
// inboundRestrictedCountryNames: []
// isInboundCompletelyRestricted: true
// isInboundRestricted: true
// title: "Peru"

Manually create: 

{NAME: "Fr. S. Antarctic Lands", NAME_LONG: "French Southern and Antarctic Lands", ABBREV: "Fr. S.A.L.", FORMAL_EN: "Territory of the French Southern and Antarctic Lands", POP_EST: 140, …}
NAME: "Fr. S. Antarctic Lands"
NAME_LONG: "French Southern and Antarctic Lands"
ABBREV: "Fr. S.A.L."
FORMAL_EN: "Territory of the French Southern and Antarctic Lands"
POP_EST: 140
POP_RANK: 1
GDP_MD_EST: 16
POP_YEAR: 2017
GDP_YEAR: 2016
ISO_A2: "TF"
ISO_A3: "ATF"
CONTINENT: "Seven seas (open ocean)"
REGION_UN: "Seven seas (open ocean)"
SUBREGION: "Seven seas (open ocean)"

NAME: "N. Cyprus"
NAME_LONG: "Northern Cyprus"
ABBREV: "N. Cy."
FORMAL_EN: "Turkish Republic of Northern Cyprus"
POP_EST: 265100
POP_RANK: 10
GDP_MD_EST: 3600
POP_YEAR: 2013
GDP_YEAR: 2013
ISO_A2: "-99"
ISO_A3: "-99"
CONTINENT: "Asia"
REGION_UN: "Asia"
SUBREGION: "Western Asia"

NAME: "Falkland Is."
NAME_LONG: "Falkland Islands"
ABBREV: "Flk. Is."
FORMAL_EN: "Falkland Islands"
POP_EST: 2931
POP_RANK: 4
GDP_MD_EST: 281.8
POP_YEAR: 2014
GDP_YEAR: 2012
ISO_A2: "FK"
ISO_A3: "FLK"
CONTINENT: "South America"
REGION_UN: "Americas"
SUBREGION: "South America"

NAME: "Greenland"
NAME_LONG: "Greenland"
ABBREV: "Grlnd."
FORMAL_EN: "Greenland"
POP_EST: 57713
POP_RANK: 8
GDP_MD_EST: 2173
POP_YEAR: 2017
GDP_YEAR: 2015
ISO_A2: "GL"
ISO_A3: "GRL"
CONTINENT: "North America"
REGION_UN: "Americas"
SUBREGION: "Northern America"

NAME: "Kosovo"
NAME_LONG: "Kosovo"
ABBREV: "Kos."
FORMAL_EN: "Republic of Kosovo"
POP_EST: 1895250
POP_RANK: 12
GDP_MD_EST: 18490
POP_YEAR: 2017
GDP_YEAR: 2016
ISO_A2: "XK"
ISO_A3: "-99"
CONTINENT: "Europe"
REGION_UN: "Europe"
SUBREGION: "Southern Europe"

NAME: "New Caledonia"
NAME_LONG: "New Caledonia"
ABBREV: "New C."
FORMAL_EN: "New Caledonia"
POP_EST: 279070
POP_RANK: 10
GDP_MD_EST: 10770
POP_YEAR: 2017
GDP_YEAR: 2016
ISO_A2: "NC"
ISO_A3: "NCL"
CONTINENT: "Oceania"
REGION_UN: "Oceania"
SUBREGION: "Melanesia"

NAME: "Puerto Rico"
NAME_LONG: "Puerto Rico"
ABBREV: "P.R."
FORMAL_EN: "Commonwealth of Puerto Rico"
POP_EST: 3351827
POP_RANK: 12
GDP_MD_EST: 131000
POP_YEAR: 2017
GDP_YEAR: 2016
ISO_A2: "PR"
ISO_A3: "PRI"
CONTINENT: "North America"
REGION_UN: "Americas"
SUBREGION: "Caribbean"

NAME: "Palestine"
NAME_LONG: "Palestine"
ABBREV: "Pal."
FORMAL_EN: "West Bank and Gaza"
POP_EST: 4543126
POP_RANK: 12
GDP_MD_EST: 21220.77
POP_YEAR: 2017
GDP_YEAR: 2016
ISO_A2: "PS"
ISO_A3: "PSE"
CONTINENT: "Asia"
REGION_UN: "Asia"
SUBREGION: "Western Asia"

NAME: "W. Sahara"
NAME_LONG: "Western Sahara"
ABBREV: "W. Sah."
FORMAL_EN: "Sahrawi Arab Democratic Republic"
POP_EST: 603253
POP_RANK: 11
GDP_MD_EST: 906.5
POP_YEAR: 2017
GDP_YEAR: 2007
ISO_A2: "EH"
ISO_A3: "ESH"
CONTINENT: "Africa"
REGION_UN: "Africa"
SUBREGION: "Northern Africa"

NAME: "S. Sudan"
NAME_LONG: "South Sudan"
ABBREV: "S. Sud."
FORMAL_EN: "Republic of South Sudan"
POP_EST: 13026129
POP_RANK: 14
GDP_MD_EST: 20880
POP_YEAR: 2017
GDP_YEAR: 2016
ISO_A2: "SS"
ISO_A3: "SSD"
CONTINENT: "Africa"
REGION_UN: "Africa"
SUBREGION: "Eastern Africa"

NAME: "Somaliland"
NAME_LONG: "Somaliland"
ABBREV: "Solnd."
FORMAL_EN: "Republic of Somaliland"
POP_EST: 3500000
POP_RANK: 12
GDP_MD_EST: 12250
POP_YEAR: 2013
GDP_YEAR: 2013
ISO_A2: "-99"
ISO_A3: "-99"
CONTINENT: "Africa"
REGION_UN: "Africa"
SUBREGION: "Eastern Africa"

NAME: "Antarctica"
NAME_LONG: "Antarctica"
ABBREV: "Ant."
FORMAL_EN: ""
POP_EST: 4050
POP_RANK: 4
GDP_MD_EST: 810
POP_YEAR: 2013
GDP_YEAR: 2013
ISO_A2: "AQ"
ISO_A3: "ATA"
CONTINENT: "Antarctica"
REGION_UN: "Antarctica"
SUBREGION: "Antarctica"