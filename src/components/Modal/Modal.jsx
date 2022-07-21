import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import { Backdrop ,ModalCard} from './Modal.styled';
import styled from 'styled-components';

const modalEl = document.querySelector('#modal');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown)
  }

    handleKeyDown = e => {
    if (e.code === 'Escape') {

      this.props.onClose();
    }
  };
    handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Backdrop   onClick={this.handleBackdropClick}>
        <ModalCard >{this.props.children}</ModalCard>
      </Backdrop>,modalEl
    );
  }
}
export default Modal;

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