import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop ,ModalCard} from './Modal.styled';

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
