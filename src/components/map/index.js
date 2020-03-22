import React, { memo } from 'react';
import { 
  ComposableMap, Geographies, Geography
 } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

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

const Map = ({ setTooltipContent }) => (
  <ComposableMap data-tip="">
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map(geo => (
          <Geography 
            key={geo.rsmKey} 
            geography={geo}
            onMouseEnter={() => {
              const { NAME, POP_EST } = geo.properties;
              setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
            }}
            onMouseLeave={() => {
              setTooltipContent("");
            }}
            style={{
              default: {
                fill: "#D6D6DA",
                outline: "none"
              },
              hover: {
                fill: "#F53",
                outline: "none"
              },
              pressed: {
                fill: "#E42",
                outline: "none"
              }
            }}
          />
        ))
      }
    </Geographies>
  </ComposableMap>
)

export default memo(Map); 
