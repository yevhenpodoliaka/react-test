import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalEl = document.querySelector('#modal');
class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return createPortal(
      <div className={s.backdrop}>
        <div className={s.modal}>{this.props.children}</div>
      </div>,modalEl
    );
  }
}
export default Modal;
