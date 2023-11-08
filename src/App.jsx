import React from 'react'
import './App.css'
import Main from './components/BaseFunctions.jsx'
import Background from './components/Background.jsx'
import GoToRankButton from './components/ToRankingButton';

function App() {

  return (
    <main>
      <div className="rankingBtn">
        <GoToRankButton/>
      </div>
      <div className='body'>
        <Background />
        <Main />
      </div>
    </main>
  );
}

export default App
