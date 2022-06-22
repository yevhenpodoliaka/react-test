import PaintingList from './components/Painting/PaintingsList';
import Section from './components/Section';
import paintins from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Counter from './components/Counter/Counter';

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
      <Section title="section 1">
        <ColorPicker options={colorPickerOptions} />
      </Section>
      <Section title="section 2">
        <PaintingList items={paintins} />
      </Section>
      <Section title="section 3">
        <Counter initialValue={0} />
      </Section>
    </div>
  );
}
