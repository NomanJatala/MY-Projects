import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-white  bg-slate-500 border border-amber-600 h-screen flex flex-col justify-center items-center'>
        <div className='mb-6'>Counter with <code>React</code> <code>TailwindCSS</code> and <code>vite</code>
        </div>
        <div
          className='bg-slate-600 rounded-3xl h-1/3 w-2/3 flex justify-center items-center'>
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
