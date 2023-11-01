import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let increment = () => {
    setCount(count + 1)
  }

  let decrement = () => {
    count <= 0 ? setCount(0) : setCount(count - 1)
  }

  return (
    <div className='flex flex-col gap-14 p-10 bg-red-500 text-white rounded-3xl'>
      <div>
        <p className='text-7xl font-extrabold'>{count}</p>
      </div>

      <div className='flex justify-center gap-10'>
        <button onClick={increment} className='bg-white text-black p-4 rounded-lg'>Increment</button>
        <button onClick={decrement} className='bg-white text-black p-4 rounded-lg'>Decrement</button>
      </div>

    </div>
  )
}

export default App
