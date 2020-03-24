import React from 'react';

import {
  TooltipContainer, BadgeContainer, CountryName, Badge,
} from './style';


const Tooltip = ({ 
  countryName, 
  isInboundRestricted, 
  isInboundLandRestricted,  
  isInboundCompletelyRestricted
}) => (
  <TooltipContainer>
    <CountryName>{countryName}</CountryName>

      <BadgeContainer>
        {!isInboundRestricted && 
          <Badge 
            accent="#000000"
            background="rgb(87, 87, 87, 0.9)"
          >
            No restrictions reported
          </Badge>
        }
        {isInboundRestricted && 
          <Badge 
            accent="#69120f"
            background="rgb(222, 45, 38, 0.9)"
          >
            Restrictions reported
          </Badge>
        }
        {isInboundLandRestricted && 
          <Badge 
            accent="#69120f"
            background="rgb(222, 45, 38, 0.9)"
          >
            Land border restrictions reported
          </Badge>
        }
        {isInboundCompletelyRestricted && 
          <Badge 
            accent="#750069"
            background={`repeating-linear-gradient(
              135deg,
              rgb(222, 45, 38, 0.9),
              rgb(222, 45, 38, 0.9) 7px,
              rgb(168, 0, 151, 0.9) 4px,
              rgb(168, 0, 151, 0.9) 11px
            )`}
          >
            Entry may be completed restricted
          </Badge>
        }
    </BadgeContainer>
  </TooltipContainer>
)

export default Tooltip;