import React, { Component } from 'react';
import s from './Counter.module.css';
import Controls from './Controls/Controls';
import Value from './Value/Value';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - this.props.step,
    }));
  };

  render() {

    return (
      <div className={s.wrap}>
        <Value value={this.state.value}/>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          step={this.props.step}
        />
      </div>
    );
  }
}

export default Counter;
