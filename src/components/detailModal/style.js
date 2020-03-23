import styled from '@emotion/styled';
import { MEDIA_QUERIES, BREAKPOINTS, SPACER } from 'src/constants';

export const ModalInnerContainer = styled.div`
 
`;

export const ModalButtonContainer = styled.div`
  text-align: right; 
  height: ${SPACER.x4large};
`;

export const CloseButton = styled.button`
  margin: ${SPACER.small} 12px;
  width: ${SPACER.x2large};
  height: ${SPACER.x2large};
  background-color: red; 
`

export const ContentContainer = styled.div`
  padding: ${SPACER.small} ${SPACER.large};
`;