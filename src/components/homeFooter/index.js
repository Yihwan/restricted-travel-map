import React from 'react';
import { css } from '@emotion/core';
import { Button, useColorMode } from 'theme-ui';

import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';

import {
  FooterContainer, 
  LegendContainer, 
  LegendItem,
  Footer, 
  StyledLink,
} from './style';

const modes = [
  'dark',
  'deep',
  'swiss',
  'light',
];

// TODO: Replace !important with styled prop if needed

const HomeFooter = ({ selectedCountry }) => {
  const [mode, setMode] = useColorMode()

  return(
    <FooterContainer>
      <LegendContainer>
        <LegendItem>
          <div
            css={css`
            height: 2px !important; 
            background-color: ${STYLE_CONSTANTS.colors.heat};
          `}
          />

          <div>Land Border Restricted</div>
        </LegendItem>
        {selectedCountry && <LegendItem>
          <div
            css={css`
            background-color: rgb(255, 191, 68, 0.5);
            border: 1px solid ${STYLE_CONSTANTS.colors.selectedCountry};
          `}
          />
          <div>Selected Country</div>
        </LegendItem>}

        {selectedCountry && <LegendItem>
          <div
            css={css`
            background-color: rgb(222, 45, 38, 0.5);
            border: 1px solid ${STYLE_CONSTANTS.colors.heat};
          `}
          />

          <div>Restricted Countries</div>
        </LegendItem>}

        <Button
          sx={{
            fontWeight: 600,
            border: '2px solid',
            margin: '0.75rem 1rem',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontSize: '12px',
            '@media screen and (min-width: 769px)': {
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
      </LegendContainer>
      <Footer>
        <StyledLink
          href="https://twitter.com/yihwan"
          target="_blank"
          rel="noopener"
        >
          About
      </StyledLink>
        <StyledLink>Github</StyledLink>
        <StyledLink
          href="https://twitter.com/yihwan"
          target="_blank"
          rel="noopener"
        >
          Twitter
      </StyledLink>
        <StyledLink
          href="https://twitter.com/yihwan"
          target="_blank"
          rel="noopener"
          css={css`
          background: rgb(87, 18, 15, 0.9) !important; 
          border-left: 4px solid ${STYLE_CONSTANTS.colors.heat} !important;
          color: white !important;
        `}
        >
          Disclaimer
      </StyledLink>
      </Footer>
    </FooterContainer>
  );
}

export default HomeFooter; 