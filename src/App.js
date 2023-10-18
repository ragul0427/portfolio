import React from 'react'
import {Navbar,Profile,Skills,Education} from "./components"

function App() {
  return (
    <div className='bg-gradient-to-r from-black/70 to-blue-900'>
      <Navbar/>
      <Profile/>
      <Skills/>
      <Education/>
    </div>
  )
}

export default App