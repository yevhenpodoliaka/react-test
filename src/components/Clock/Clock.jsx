import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 2000ms ' + Date.now());
      setTime(new Date());
    }, 2000);

    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Current time: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
       stop
      </button>
    </div>
  );
}