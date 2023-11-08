import React from 'react'
import './App.css'
import Main from './components/BaseFunctions.jsx'
import Background from './components/Background.jsx'

function App() {

  return (
    <main>
      <div className='body'>
        <Background />
        <Main />
      </div>
    </main>
  );
}

export default App
