import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

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
      <div className={s.backdrop}  onClick={this.handleBackdropClick}>
        <div className={s.modal}>{this.props.children}</div>
      </div>,modalEl
    );
  }
}
export default Modal;
