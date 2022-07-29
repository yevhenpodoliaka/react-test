import React, { Component } from 'react';
// import TodoApp from './components/TodoApp/TodoApp';
import ColorPicker from './components/ColorPicker';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
// import Modal from './components/Modal/Modal';
import Clock from './components/Clock/Clock';
import Form from './components/Form/Form';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  render() {
    return (
      <>
        <Dropdown>
        <Clock />
        </Dropdown>
        <ColorPicker options={colorPickerOptions} />
        <Counter initialValue={0} step={1} />
    {/* <TodoApp/> */}
      
        <Form/>
      </>
    );
  }
}
export default App;
