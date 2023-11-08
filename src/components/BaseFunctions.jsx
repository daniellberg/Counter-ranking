import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

function Main() {

  const [counter, setCounter] = useState(0);
  const [sliderValue, setSliderValue] = useState(10);
  const [segundos, setSegundos] = useState(sliderValue);
  const [isActive, setIsActive] = useState(false);

  const classePosNeg = counter < 0 ? 'red-text' : 'white-text';

  const buttonIncrease = () => {
    setCounter(counter + 1);
  };

  const buttonDecrease = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const startTimer = () => {
    setSegundos(sliderValue);
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSegundos(sliderValue);
  };

  useEffect(() => {
    let interval;

    if (isActive && segundos > 0) {
      interval = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos - 1);
      }, 1000);

      //slider moves with time
      setSliderValue(segundos);
    } else if (segundos === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, segundos]);

  return (
    <div>
      <h1>
        You clicked the button{' '}
        <span id="counter" className={classePosNeg}>
          {counter}
        </span>{' '}
        times
      </h1>
      <div className='buttonCounter'>
        <button onClick={buttonIncrease} className="button">Increase</button>
        <button onClick={buttonDecrease} className="button">Decrease</button>
        <button onClick={resetCounter} className="button">Start Again</button>
      </div>
      <div className='select'>
        <h2>Choose a challenge</h2>
        <Slider
          value={sliderValue}
          onChange={(event, newValue) => setSliderValue(newValue)}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={0}
          max={20}
        />
      </div>
      <div className='buttonTimer'>
        <h1>{segundos} seconds left</h1>
        <button onClick={startTimer} className="button">Start</button>
        <button onClick={stopTimer} className="button">Stop</button>
        <button onClick={resetTimer} className="button">Reset</button>
      </div>
    </div>
  );
}

export default Main;
