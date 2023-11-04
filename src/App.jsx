import { useState } from 'react'
import './App.css'
import Base from './components/BaseText.jsx'

function App() {
  const [counter, setCount] = useState(0)

  function buttonIncrease (){
    setCount(function(atual){
      return ++atual
    })
  }

  function buttonDecrease (){
    setCount(function(atual){
      return --atual
    })
  }

  return (
     <Base counter={counter} buttonIncrease={buttonIncrease} buttonDecrease={buttonDecrease}></Base>
  )
}

export default App
