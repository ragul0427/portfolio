import React from 'react'
import {Navbar,Profile,Skills} from "./components"

function App() {
  return (
    <div className='bg-gradient-to-r from-black/70 to-blue-900'>
      <Navbar/>
      <Profile/>
      <Skills/>
    </div>
  )
}

export default App