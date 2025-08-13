import { useState } from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Cards from './components/cards'
import Animations from './animations'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Cards />
      <Animations/>
    </>
  )
}

export default App
