import styled from '@emotion/styled';
import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';
export const MapContainer = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
`

export const GeographyWrapper = styled.g`
  cursor: pointer; 
  fill: ${({ fillColor }) => fillColor};
  fill-opacity: ${({ fillOpacity }) => fillOpacity};
  stroke: ${({ strokeColor }) => strokeColor};
  stroke-width: ${({ strokeWidth }) => strokeWidth};

  &:hover {
    fill: ${STYLE_CONSTANTS.colors.selectedCountry};
    fill-opacity: ${STYLE_CONSTANTS.opacity.secondary};
  }
`;