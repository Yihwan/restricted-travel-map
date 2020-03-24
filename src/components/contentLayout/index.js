import React from 'react';
import { Button, useColorMode } from 'theme-ui';

import {
  ContentLayoutHeader, 
  LinkContainer,
  NavLink,
  ContentLayoutContainer, 
} from './style';

const modes = [
  'dark',
  'deep',
  'times',
  'light',
];


const ContentLayout = ({ title, children }) => {
  const [mode, setMode] = useColorMode();

  return(
    <>
      <ContentLayoutHeader>
        <LinkContainer>
          <NavLink to="/">Map</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/terms">Terms of Use</NavLink>
          <NavLink to="/privacy">Privacy Policy</NavLink>
        </LinkContainer>
        <Button
          sx={{
            fontWeight: 600,
            border: '2px solid',
            padding: '0.5rem 0.75rem',
            cursor: 'pointer',
            fontSize: '12px',
            '@media screen and (min-width: 768px)': {
              fontSize: '16px',
              marginLeft: '0px',
              marginTop: '32px',
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
      </ContentLayoutHeader>
      <ContentLayoutContainer>
        <h1>{title}</h1>
        {children}
      </ContentLayoutContainer>
    </>
  );
}

export default ContentLayout;