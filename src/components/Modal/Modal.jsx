import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const modalEl = document.querySelector('#modal');
export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown',handleKeyDown)
    return()=>{return window.removeEventListener('keydown', handleKeyDown) }
  })
    const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
    const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
     onClose();
    }
  };
    return createPortal(
      <Backdrop   onClick={handleBackdropClick}>
        <ModalCard >{children}</ModalCard>
      </Backdrop>,modalEl
    );
}





// ------Styled--------------------------
const Backdrop = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);`

const ModalCard = styled.div`   
     position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 12px;
    width:280px`