import PaintingList from './components/PaintingsList';
// import Section from './components/Section';
import paintins from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';

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
    <div>
      {/* <Section title="Hello"> */}
      <ColorPicker options={colorPickerOptions} />
      <PaintingList items={paintins} />
      {/* </Section> */}
      {/* <Section /> */}
    </div>
  );
}
