import styled from '@emotion/styled';

import { MEDIA_QUERIES, SPACER } from 'src/constants';

export const FooterContainer = styled.div`
  line-height: 1.15;
  position: fixed; 
  bottom: 16px; 
  left: 16px; 
  right: 16px; 
  letter-spacing: 0.01em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  ${MEDIA_QUERIES.mdUp} {
    flex-direction: row; 
    align-items: center;
  }
`;

export const LegendContainer = styled.div`
  font-size: 12px; 
  margin: 0 auto;
  margin-bottom: ${SPACER.base};

  ${MEDIA_QUERIES.mdUp} {
    font-size: 14px;
    margin: ${SPACER.x2small} ${SPACER.small};
  }


  display: flex;
  align-content: center;
`; 

export const LegendItem = styled.div`
  display: flex; 
  margin: 0 ${SPACER.base};
  align-items: center;
  position: relative; 



  > div:first-of-type {
    position: absolute;
    width: 12px; 
    height: 12px;

    ${MEDIA_QUERIES.mdUp} {
      width: 16px; 
      height: 16px; 
    }
  }

  > div:nth-of-type(2) {
    margin-left: 24px;

    ${MEDIA_QUERIES.mdUp} {
      margin-left: 28px;
    }
  }
`;


export const Footer = styled.footer`
  display: flex;

  justify-content: space-around;

`;
  
export const StyledLink = styled.a`
  display: block;
  background: rgb(36, 108, 240, 0.25);
  border-left: 4px solid rgb(36, 108, 240, 1);
  text-decoration: none; 
  color: unset;
  font-weight: 600;

  font-size: 12px; 
  padding: ${SPACER.small} 0.75rem;

  ${MEDIA_QUERIES.mdUp} {
    font-size: 14px;
    padding: ${SPACER.small} ${SPACER.base};
    margin: ${SPACER.x2small} ${SPACER.small};
  }
`;

