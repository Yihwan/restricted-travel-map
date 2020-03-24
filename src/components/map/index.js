import React, { memo, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Button } from 'theme-ui';
import { 
  ComposableMap, ZoomableGroup, Geographies, Geography
} from 'react-simple-maps';
import { PatternLines } from "@vx/pattern";

import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';
import Tooltip from 'src/components/tooltip';

import { MapContainer, GeographyWrapper, ZoomControllerContainer } from './style';
import { createCountryMetaData, generateHeatMapColors } from './utils';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const Map = ({ setTooltipContent, selectedCountryISO3, setSelectedCountryISO3 }) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    if (zoom >= 4) return;
    setZoom(zoom + 1);
  }

  const handleZoomOut = () => {
    if (zoom <= 1) return;
    setZoom(zoom - 1);
  }

  const handleZoomEnd = position => {
    setZoom(position.zoom);
  }

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
    <>
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
          <ZoomableGroup center={[10, 10]} zoom={zoom} onZoomEnd={handleZoomEnd}>
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

      <ZoomControllerContainer>
        <Button
          sx={{
            border: '2px solid',
            padding: '4px',
            margin: '4px',
          }}
          onClick={handleZoomIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </Button>
        <Button 
          sx={{
            border: '2px solid',
            padding: '4px',
            margin: '4px',
          }}
          onClick={handleZoomOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </Button>
      </ZoomControllerContainer>
    </>
  );
}
  
export default memo(Map); 