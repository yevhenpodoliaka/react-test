import s from './ColorPicker.module.css';
console.log(s);
function ColorPicker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            key={option.color}
            className={s.option}
            style={{ backgroundColor: option.color }}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
