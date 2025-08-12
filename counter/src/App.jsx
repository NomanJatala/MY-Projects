import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-white  bg-amber-200 border border-amber-600 h-screen flex flex-col justify-center items-center'>
        <div className=' mb-7 text-slate-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Counter with
        </div>
         <span className='text-blue-500 text-2xl mb-7 sm:text-3xl md:text-4xl lg:text-5xl font-bold'>React, TailwindCSS, Vite</span>
        <div
          className='bg-slate-600 rounded-3xl h-40 w-80 flex justify-center items-center'>
            <button className='text-5xl rounded-2xl bg-red-500 ml-6 px-4 pb-2'
            onClick={()=>{
              setCount(count - 1)
            }}
            >-</button>
            <div className='text-6xl   px-3 pb-2 w-3xl flex justify-center items-center'>{count}</div>
            <button className='text-5xl rounded-2xl bg-green-500 mr-6 px-3 pb-2'
             onClick={()=>{
              setCount(count + 1)
            }}
            >+</button>
            </div>
      </div>
    </>
  )
}

export default App
