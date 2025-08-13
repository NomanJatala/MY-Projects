import { useState } from 'react'

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
      <div className={`border-8 border-amber-400 h-screen flex justify-center flex-col items-center`}>
        <div className='border-3 border-amber-300 flex flex-col justify-center items-center gap-4 p-4 bg-amber-100 rounded-lg shadow-xl'>
          <div className='font-bold text-xl'>Bg changer</div>
          <button className='bg-amber-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-amber-500'
          >Change</button>
          
          <div className='text-amber-900 font-semibold text-lg'>Click the button to change the background color</div>
          
        </div>

      </div>
    </>
  )
}

export default App
