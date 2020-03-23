import React from 'react';
import { Button, useColorMode } from 'theme-ui';

import { 
  StyledHeader, 
  PrimaryHeading, 
  SecondaryHeading, 
  StatisticSection,
  StatisticContainer,
  StatisticNumber,
  StatisticCaption,
} from './style';

const modes = [
  'dark',
  'deep',
  'swiss',
  'light',
];

const HomeHeader = ({ allRestrictionCount, completeRestrictionCount }) => {
  const [mode, setMode] = useColorMode()

  return(
    <StyledHeader>
      <div>
        <PrimaryHeading><span>CRITICAL EVENT:</span> Pandemic COVID-19</PrimaryHeading>
        <SecondaryHeading>{allRestrictionCount} COUNTRIES REPORTING TRAVEL RESTRICTIONS</SecondaryHeading>
      </div>

      <StatisticSection>
        <StatisticContainer>
          <StatisticNumber><span>{completeRestrictionCount}</span>COUNTRIES</StatisticNumber>
          <StatisticCaption isStriped>Completely Restricted</StatisticCaption>
        </StatisticContainer>

        <StatisticContainer>
          <StatisticNumber><span>{allRestrictionCount - completeRestrictionCount}</span>COUNTRIES</StatisticNumber>
          <StatisticCaption>Partially Restricted</StatisticCaption>
        </StatisticContainer>
      </StatisticSection>

      <Button
        sx={{
          fontWeight: 600,
          border: '2px solid',
          margin: '1rem 1.5rem',
          padding: '0.75rem 1.5rem',
          cursor: 'pointer',
          fontSize: '16px',
          '@media screen and (max-width: 768px)': {
            display: 'none',
          }
        }}
        onClick={e => {
          const index = modes.indexOf(mode)
          const next = modes[(index + 1) % modes.length]
          setMode(next)
        }}
      >
        {mode}
      </Button>
    </StyledHeader>
  );
}

export default HomeHeader; 