import * as React from 'react';
import { useState, useEffect } from 'react';

import Slider from '@mui/material/Slider';

//function counter
function Main() {

    const [counter, setCounter] = useState(0);

    function buttonIncrease() {
        setCounter(counter + 1);
    }

    function buttonDecrease() {
        setCounter(counter - 1);
    }

    function resetCounter() {
        setCounter(0);
    }

    const classePosNeg = counter < 0 ? 'red-text' : 'white-text';

    //function Timer
    const [segundos, setSegundos] = useState(10);
    const [isActive, setIsActive] = useState(false);

    function startTimer() {
        setIsActive(true);
    }

    function stopTimer() {
        setIsActive(false);
    }

    function resetTimer() {
        setIsActive(false);
        setSegundos(0);
    }

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setSegundos((prevSegundos) => prevSegundos + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive]);

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
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>
            <div className='buttonTimer'>
                <h1>{segundos} seconds have passed</h1>
                <button onClick={startTimer} className="button">Start</button>
                <button onClick={stopTimer} className="button">Stop</button>
                <button onClick={resetTimer} className="button">Reset</button>
            </div>
        </div>
    );
}

export default Main;