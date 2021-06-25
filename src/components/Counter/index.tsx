import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleCounter = (num: number) => {
    setCounter(lastCount => lastCount + num)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={ () => handleCounter(-1) }>-1</button>
      <button onClick={ () => handleCounter(+1) }>+1</button>
    </div>
  )
}

export default Counter
