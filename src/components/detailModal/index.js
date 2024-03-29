import React from 'react';
import Modal from 'react-modal';

import './detailModal.css';
import { 
  ModalInnerContainer, 
  ModalButtonContainer, 
  CloseButton, 
  ContentContainer,
} from './style';

Modal.setAppElement('#___gatsby')

const DetailModal = ({ selectedCountry, setSelectedCountryISO3 }) => {
  return(
    <Modal
      isOpen={!!selectedCountry}
      onRequestClose={() => setSelectedCountryISO3(null)}
      contentLabel="Example Modal"
      closeTimeoutMS={250}
      overlayClassName={{
        base: "DetailModal__Overlay",
        afterOpen: "DetailModal__Overlay--after-open",
        beforeClose: "DetailModal__Overlay--before-close",
      }}
      className={{
        base: "DetailModal__Content",
        afterOpen: "DetailModal__Content--after-open",
        beforeClose: "DetailModal__Content--before-close",
      }}
    >
      <ModalInnerContainer>
        <ModalButtonContainer>
          <CloseButton onClick={() => setSelectedCountryISO3(null)}>close</CloseButton>
        </ModalButtonContainer>
        <ContentContainer>

          <div dangerouslySetInnerHTML={{ __html: selectedCountry && selectedCountry.html }} />
        </ContentContainer>
      </ModalInnerContainer>
    </Modal>
  );
}


export default DetailModal;