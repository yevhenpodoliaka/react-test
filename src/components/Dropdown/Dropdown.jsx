import React, { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  // show = () => {
  //     this.setState({ visible: true })
  //     console.log('show');
  // }
  // hide = () => {
  //     this.setState({ visible:false })
  //     console.log('hide');
  // }
  render() {
    const {visible}=this.state
    return (
      <div className={s.dropdown}>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'close' : 'open'}
        </button>

        {visible && <div className={s.dropdown__menu}>{this.props.children}</div>}
       
      </div>
    );
  }
}

export default Dropdown;
