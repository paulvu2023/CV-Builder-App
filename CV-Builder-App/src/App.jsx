import { useState } from 'react'
import PersonalDetails from "./components/PersonalDetails"
import ProfessionalSummary from "./components/ProfessionalSummary"
import EducationItem from './components/EducationItem'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

let educationCount = 0;

function App() {

  const [detailsData, setdetailsData] = useState({
    wantedJobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    summary: ''
  })
  console.log(detailsData)

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event){
    setdetailsData((prevdetailsData) => {
      return {
        ...prevdetailsData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <>
      <form className="left" onSubmit={handleSubmit}>
          <PersonalDetails detailsData={detailsData} handleChange={handleChange}/>
          <ProfessionalSummary detailsData={detailsData} handleChange={handleChange}/>
          
      </form>
      <div className="right">
        
      </div>
    </>
  )
}

export default App
