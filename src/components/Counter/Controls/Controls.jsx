import React from 'react';
import s from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, step }) => {
  return (
    <>
      <button className={s.btn} type="button" onClick={onIncrement}>
        Increment by {step}
      </button>
      <button className={s.btn} type="button" onClick={onDecrement}>
        Decrement by {step}
      </button>
    </>
  );
};

export default Controls;
