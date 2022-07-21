// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends PureComponent {
  state = {
    activeBtnInx: 0,
  };
  // якщо використовувати наслідування відComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeBtnInx !== this.state.activeBtnInx;
  // }
  setActiveIndex = index => {
    this.setState({ activeBtnInx: index });
  };
  makeBtnClasses = index => {
    const btnClasses = [s.btn];

    if (index === this.state.activeBtnInx) {
      btnClasses.push(s.btn__active);
    }
    return btnClasses.join(' ');
  };
  render() {
    const { options } = this.props;
    const { activeBtnInx } = this.state;
    const { label } = options[activeBtnInx];
    console.log(Date.now());

    return (
      <div className={s.container}>
        <h2>Color Picker</h2>
        <p>Color name:{label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeBtnClasses(index)}
              style={{ backgroundColor: color }}
              onClick={() => {
                this.setActiveIndex(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
