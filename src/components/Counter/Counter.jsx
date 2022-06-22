import React, { Component } from "react";
import s from './Counter.module.css'


class Counter extends Component {
  static defaultProps = {
      step: 1,
      initialValue: 0,
  };

    constructor(props) {
         
        super(props);
        
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
         
          this.state = {
              value: this.props.initialValue,
              
    };
  }
     handleIncrement(evt) {
    console.log("Increment button was clicked!", evt); // працює
         console.log("this.props: ", this.props); // Error: cannot read props of undefined
           this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }

    handleDecrement(evt) {
        console.log("Decrement button was clicked!", evt); // працює
        console.log("this.props: ", this.props); // Error: cannot read props of undefined
       this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    }

  


  render() {
    const { step } = this.props;

    return (
      <div className={s.wrap}>
        <span className={s.num}>{this.state.value}</span>
        <button className={s.btn} type="button" onClick={this.handleIncrement}>Increment by {step}</button>
        <button className={s.btn} type="button" onClick={this.handleDecrement}>Decrement by {step}</button>
      </div>
    );
  }
}

export default Counter