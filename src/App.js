import PaintingList from './components/PaintingsList';
import Section from './components/Section';
import paintins from './paintings.json';

// import './App.css';


export default function App() {
  return (
    <div>
      <Section title="Hello">
        <PaintingList items={paintins} />
      </Section>
      <Section />
    </div>
  );
}
