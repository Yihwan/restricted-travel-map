import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { MEDIA_QUERIES, BREAKPOINTS, SPACER } from 'src/constants';

export const ContentLayoutHeader = styled.nav`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  padding: ${SPACER.base};
  align-items: flex-start;

  ${MEDIA_QUERIES.mdUp} {
    justify-content: flex-start;
    flex-direction: column;
    padding: ${SPACER.x5large} ${SPACER.x3large};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  background: rgb(36, 108, 240, 0.25);
  border-left: 4px solid rgb(36, 108, 240, 1);
  text-decoration: none;
  color: unset;
  font-weight: 600;
  padding: ${SPACER.small} ${SPACER.base};
  font-size: 12px;

  margin: 6px 0;

  ${MEDIA_QUERIES.mdUp} {
    font-size: 16px;
    padding: 0.75rem ${SPACER.base};
    padding-right: ${SPACER.xlarge};
    margin: 0.75rem 0;
    margin-right: ${SPACER.xlarge};
  }
`;

export const ContentLayoutContainer = styled.main`

  padding: ${SPACER.small} ${SPACER.base};
  margin-top: 200px;
  overflow: scroll;
  height: 100vh;
  max-width: ${BREAKPOINTS.sm}px;
  margin-bottom: 16px;

  ${MEDIA_QUERIES.mdUp} {
    margin-left: 18rem;
    margin-top: 60px;
  }

  h1 {
    font-size: 32px; 
    font-weight: 700;
    margin-bottom: 24px;

    ${MEDIA_QUERIES.mdUp} {
      font-size: 48px;
    }
  }

  p {
    line-height: 1.25;
    font-size: 18px;
    margin: ${SPACER.base} 0;

    ${MEDIA_QUERIES.mdUp} {
      line-height: 1.35;
      font-size: 20px;
      margin: 20px 0;
    }
  }

  a {
    text-decoration: none; 
    font-weight: 700;
    color: rgb(36, 108, 240, 1);
  }

  strong {
    font-weight: bold;
  }
`;
