// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [segundos, setSegundos] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   function startTimer() {
//     setIsActive(true);
//   }

//   function stopTimer() {
//     setIsActive(false);
//   }

//   function resetTimer() {
//     setIsActive(false);
//     setSegundos(0);
//   }

//   useEffect(() => {
//     let interval;

//     if (isActive) {
//       interval = setInterval(() => {
//         setSegundos((prevSegundos) => prevSegundos + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isActive]);

//   return (
//     <div className='timer-buttons'>
//       <h1>Cronômetro: {segundos} segundos</h1>
//       <button onClick={startTimer} className="button">Start</button>
//       <button onClick={stopTimer} className="button">Stop</button>
//       <button onClick={resetTimer} className="button">Reset</button>
//     </div>
//   );
// }

// export default Timer;