import styled from '@emotion/styled';

import { SPACER } from 'src/constants';

export const TooltipContainer = styled.div`
  margin: ${SPACER.x2small} -${SPACER.small};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BadgeContainer = styled.div`
  margin-top: 12px;
  
  display: flex; 
  flex-direction: column;
`;

export const Badge = styled.span`
  margin-bottom: 2px;
  font-weight: 500;
  padding: ${SPACER.xsmall} ${SPACER.small};
  background: ${({ background }) => background };
  border-left: 4px solid ${({ accent }) => accent};
`;
  
export const CountryName = styled.h2`
  font-weight: bold;
  font-size: 1rem;
`;

export const TooltipItem = styled.div`
  padding: ${SPACER.xsmall} 0;
`;
