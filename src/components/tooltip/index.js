import React from 'react';

import {
  TooltipContainer, CountryName, TooltipItem,
} from './style';

const Tooltip = ({ 
  countryName, 
  isInboundRestricted, 
  isInboundLandRestricted,  
  isInboundCompletelyRestricted
}) => (
  <TooltipContainer>
    <CountryName>{countryName}</CountryName>
      {!isInboundRestricted && <TooltipItem>🛂 No restrictions reported</TooltipItem>}
      {isInboundRestricted && <TooltipItem>🚨 Restrictions reported</TooltipItem>}
      {isInboundLandRestricted && <TooltipItem>🚧 Land border restrictions reported</TooltipItem>}
      {isInboundCompletelyRestricted && <TooltipItem>⛔ Entry may be completed restricted</TooltipItem>}
  </TooltipContainer>
)

export default Tooltip;