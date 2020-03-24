import styled from '@emotion/styled';
import { MEDIA_QUERIES, SPACER } from 'src/constants';

import STYLE_CONSTANTS from 'src/gatsby-plugin-theme-ui';

export const ModalInnerContainer = styled.div`
`;

export const ModalButtonContainer = styled.div`
  text-align: right; 
  height: ${SPACER.x4large};
`;

export const CloseButton = styled.button`
  margin: ${SPACER.base};
  padding: ${SPACER.small} 12px;
  border: 2px solid white; 
  background: transparent;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.03em;
  font-weight: 700;

  &:focus {
    box-shadow: 0 0 2px 2px rgb(255, 191, 68, 0.5);
  }
`

export const ContentContainer = styled.div`
  padding: ${SPACER.small} ${SPACER.large};

  overflow: scroll;

  .ModalContent__Header {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 0.75rem;

    ${MEDIA_QUERIES.mdUp} {
      font-size: 1.75rem;
    }
  }

  .ModalContent__SubHeader {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.15;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;

    ${MEDIA_QUERIES.mdUp} {
      font-size: 1.5rem;
    }
  }

  strong {
    font-weight: bold;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.25;
    letter-spacing: 0.01em;
  }

  a {
    text-decoration: none; 
    font-weight: 700; 
    color: rgb(2, 185, 255, 1);
  }
  .Badge {
    margin-bottom: 2px;
    font-weight: 500;
    padding: ${SPACER.xsmall} ${SPACER.small};
  }

  .ModalContent__Badge--NoRestrictions {
    background: rgb(87, 87, 87, 0.5);
    border-left: ${STYLE_CONSTANTS.colors.defaultBorder};
  }

  .ModalContent__Badge--PartialRestrictions, .ModalContent__Badge--LandRestrictions {
    background: rgb(222, 45, 38, 0.25);
    border-left: 4px solid ${STYLE_CONSTANTS.colors.heat};
  }

  .ModalContent__Badge--CompleteRestrictions {
    background: repeating-linear-gradient(
                135deg,
                rgb(222, 45, 38, 0.5),
                rgb(222, 45, 38, 0.5) 7px,
                rgb(168, 0, 151, 0.5) 4px,
                rgb(168, 0, 151, 0.5) 11px
              );
    border-left: 4px solid rgb(168, 0, 151, 1);
  }
`;

export const ModalHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0.75rem;

  ${MEDIA_QUERIES.mdUp} {
    font-size: 1.75rem;
  }
`;

export const ModalBadge = styled.div`

  background: ${({ background }) => background};
  border-left: 4px solid ${({ accent }) => accent};
`;