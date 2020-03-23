import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { 
  ComposableMap, ZoomableGroup, Geographies, Geography
} from 'react-simple-maps';
import { PatternLines } from "@vx/pattern";

import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';
import Tooltip from 'src/components/tooltip';

import { MapContainer, GeographyWrapper } from './style';
import { createCountryMetaData, generateHeatMapColors } from './utils';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const Map = ({ setTooltipContent, selectedCountryISO3, setSelectedCountryISO3 }) => {
  const countryMetaDataQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            ISO3
            isInboundRestricted
            isInboundLandRestricted
            isInboundCompletelyRestricted
            inboundRestrictedCountriesISO3
          }
        }
      }
    }
  `);

  const countryMetaData = createCountryMetaData(countryMetaDataQuery);

  // TODO: Fix missing countries. 
  return(
    <MapContainer>
      <ComposableMap 
        data-tip="" 
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <PatternLines
          id="lines"
          height={8}
          width={8}
          stroke="#a80097"
          strokeWidth={2}
          background={STYLE_CONSTANTS.colors.heat}
          orientation={["diagonal"]}
        />
        <ZoomableGroup center={[10, 10]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.filter(geo => countryMetaData[geo.properties.ISO_A3]).map(geo => {
                const country = countryMetaData[geo.properties.ISO_A3];
                const selectedCountry = countryMetaData[selectedCountryISO3];

                const { 
                  fillColor, fillOpacity, strokeColor, strokeWidth,
                } = generateHeatMapColors(
                  country, 
                  selectedCountry,
                );

                const { 
                  title,
                  isInboundRestricted, 
                  isInboundLandRestricted, 
                  isInboundCompletelyRestricted,
                } = country; 
                
                return(
                  <GeographyWrapper
                    key={geo.rsmKey}
                    fillColor={fillColor}
                    fillOpacity={fillOpacity}
                    strokeColor={strokeColor}
                    strokeWidth={strokeWidth}
                  >
                    <Geography
                      geography={geo}
                      onMouseEnter={() => {
                        setTooltipContent(
                          <Tooltip 
                            countryName={title}
                            isInboundRestricted={isInboundRestricted}
                            isInboundLandRestricted={isInboundLandRestricted}
                            isInboundCompletelyRestricted={isInboundCompletelyRestricted}
                          />
                        );
                      }}
                      onMouseLeave={() => {
                        setTooltipContent('');
                      }}
                      onClick={() => { 
                        if (selectedCountryISO3 === geo.properties.ISO_A3) {
                          setSelectedCountryISO3(null);
                          return;
                        }

                        setSelectedCountryISO3(geo.properties.ISO_A3) 
                      }}
                      style={{
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  </GeographyWrapper>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </MapContainer>
  );
}
  
export default memo(Map); 