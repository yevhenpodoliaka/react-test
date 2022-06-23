import ColorPicker from './components/ColorPicker/ColorPicker';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';

// import './App.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <>
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
      <Counter initialValue={0} step={1} />
    </>
  );
}
