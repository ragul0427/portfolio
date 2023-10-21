import React from 'react'
import {Navbar,Profile,Skills,Education,Projects} from "./components"

function App() {
  return (
    <div className='bg-gradient-to-r from-black/80 to-black'>
      <Navbar/>
      <Profile/>
      <Skills/>
      <Education/>
      <Projects/>
    </div>
  )
}

export default App