import styled from '@emotion/styled';

import { SPACER, MEDIA_QUERIES } from 'src/constants';
import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';

// TODO: Use style constants for font size, etc. 

export const StyledHeader = styled.header`
  position: fixed; 
  top: 12px; 
  left: 0;
  right: 0;

  z-index: 1;
  letter-spacing: 0.01em;

  display: flex; 
  justify-content: space-between;
  align-items: center;
  flex-direction: column; 

  ${MEDIA_QUERIES.mdUp} {
    flex-direction: row
  }
`;

export const PrimaryHeading = styled.h1`
  color: white;
  font-weight: 600;
  border-left: 4px solid ${STYLE_CONSTANTS.colors.heat};
  background: rgb(87, 18, 15, 0.9);
  padding: 0.75rem ${SPACER.base};

  font-size: 1rem;

  ${MEDIA_QUERIES.mdUp} {
    font-size: 1.25rem;
  }
`;

export const SecondaryHeading = styled.h2`
  color: white;
  margin-top: 2px;
  font-weight: 500;
  padding: ${SPACER.small} ${SPACER.base};
  text-transform: uppercase;
  background-color: ${STYLE_CONSTANTS.colors.defaultCountry};
  border-left: 4px solid ${STYLE_CONSTANTS.colors.defaultBorder};

  font-size: 0.75rem;

  ${MEDIA_QUERIES.mdUp} {
    font-size: 1rem;
  }
`;

export const StatisticSection = styled.div`
  display: flex;
  text-align: center;
`;

export const StatisticContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  margin: ${SPACER.large};

  ${MEDIA_QUERIES.mdUp} {
      margin: ${SPACER.small} ${SPACER.large};
  }
`;

export const StatisticNumber = styled.div`
  font-size: 12px;
  font-weight: 600;

  margin: 0 auto;
  > span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    font-weight: 700;
  }

  ${MEDIA_QUERIES.mdUp} {
    font-size: 14px;

    > span {
      font-size: 2rem;
    }
  }
`;

export const StatisticCaption = styled.div`
  background: rgb(222, 45, 38, 0.25);
  background: ${({ isStriped }) => isStriped && `repeating-linear-gradient(
    135deg,
    rgb(222, 45, 38, 0.5),
    rgb(222, 45, 38, 0.5) 7px,
    rgb(168, 0, 151, 0.5) 4px,
    rgb(168, 0, 151, 0.5) 11px
  )`};
  border: 1px solid ${STYLE_CONSTANTS.colors.defaultBorder};
  margin-top: ${SPACER.small};
  text-transform: uppercase;
  padding: ${SPACER.small} 0.75rem;
  font-size: 12px;
  font-weight: 700;

  ${MEDIA_QUERIES.mdUp} {
    font-size: 14px;
  }
`