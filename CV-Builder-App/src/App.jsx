import { useState } from 'react'
import PersonalDetails from "./components/PersonalDetails"
import './App.css'

function App() {

  
  

  function handleSubmit(event) {
    event.preventDefault();
  }

  

  return (
    <>
      <form className="left" onSubmit={handleSubmit}>
          <PersonalDetails/>
      </form>
      <div className="right">
        
      </div>
    </>
  )
}

export default App
