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

  const [educationData, setEducationData] = useState([
    {
      index: 0,
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    }
  ])

  function handleDetailsChange(event){
    setdetailsData((prevDetailsData) => {
      return {
        ...prevDetailsData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleEducationChange(event) {
    const {name, value } = event.target;
    const index = event.target.dataset.index;
    setEducationData((prevEducationData) => {
      const updatedEducationData = [...prevEducationData];
      updatedEducationData[index] = {
        ...updatedEducationData[index],
        [name]: value,
      };
      return updatedEducationData;
    });
  }  

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className="left" onSubmit={handleSubmit}>
          <PersonalDetails detailsData={detailsData} handleDetailsChange={handleDetailsChange}/>
          <ProfessionalSummary detailsData={detailsData} handleDetailsChange={handleDetailsChange}/>
          <h1 className="education">Education</h1>
          <Accordion defaultActiveKey="0">
            <EducationItem educationData={educationData} eventKey={educationCount} handleEducationChange={handleEducationChange}/>
          </Accordion>
      </form>
      <div className="right">
        
      </div>
    </>
  )
}

export default App
