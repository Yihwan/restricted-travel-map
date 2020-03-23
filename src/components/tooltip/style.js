import styled from '@emotion/styled';

import { SPACER } from 'src/constants';

export const TooltipContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-content: flex-start;
  font-size: 1rem;
`;

export const CountryName = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
`;

export const TooltipItem = styled.div`
  padding: ${SPACER.xsmall} 0;
`;
