import { useState } from 'react'
import PersonalDetails from "./components/PersonalDetails"
import ProfessionalSummary from "./components/ProfessionalSummary"
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    wantedJobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    summary: ''
  })
  console.log(formData)

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event){
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <>
      <form className="left" onSubmit={handleSubmit}>
          <PersonalDetails handleChange={handleChange}/>
          <ProfessionalSummary handleChange={handleChange}/>
      </form>
      <div className="right">
        
      </div>
    </>
  )
}

export default App
