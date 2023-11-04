import { useState } from 'react'
import './App.css'
import Base from './components/BaseText.jsx'

function App() {
  const [counter, setCount] = useState(0)

  function buttonIncrease (){
    setCount(counter+1)
  }

  function buttonDecrease (){
    setCount(counter-1)
  }

  function resetCounter (){
    setCount(0)
  }

  return (
    <Fundo>
      <Base counter={counter} buttonIncrease={buttonIncrease} buttonDecrease={buttonDecrease} 
     resetCounter={resetCounter}></Base>
    </Fundo>
  )
}

export default App
