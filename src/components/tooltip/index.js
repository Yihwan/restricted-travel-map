import React from 'react';

import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';

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
            accent={STYLE_CONSTANTS.colors.defaultBorder}
            background="rgb(87, 87, 87, 0.5)"
          >
            No restrictions reported
          </Badge>
        }
        {isInboundRestricted && 
          <Badge 
            accent={STYLE_CONSTANTS.colors.heat}
            background="rgb(222, 45, 38, 0.25)"
          >
            Restrictions reported
          </Badge>
        }
        {isInboundLandRestricted && 
          <Badge 
            accent={STYLE_CONSTANTS.colors.heat}
            background="rgb(222, 45, 38, 0.25)"
          >
            Land border restrictions reported
          </Badge>
        }
        {isInboundCompletelyRestricted && 
          <Badge 
            accent="rgb(168, 0, 151, 1)"
            background={`repeating-linear-gradient(
              135deg,
              rgb(222, 45, 38, 0.5),
              rgb(222, 45, 38, 0.5) 7px,
              rgb(168, 0, 151, 0.5) 4px,
              rgb(168, 0, 151, 0.5) 11px
            )`}
          >
            Entry may be completed restricted
          </Badge>
        }
    </BadgeContainer>
  </TooltipContainer>
)

export default Tooltip;