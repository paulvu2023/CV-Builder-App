import { useState } from 'react'
import PersonalDetails from "./components/PersonalDetails"
import ProfessionalSummary from "./components/ProfessionalSummary"
import EducationItem from './components/EducationItem'
import EmploymentItem from './components/EmploymentItem'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

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
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    }
  ])

  const [employmentData, setEmploymentData] = useState([
    {
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    }
  ])
  console.log(employmentData)

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

  function addNewEducationItem() {
    setEducationData((prevEducationData) => {
      const newEducationData = [...prevEducationData]
      newEducationData.push({
        index: educationData.length,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: ''
      })
      return newEducationData;
    })
  }

  function handleEmploymentChange(event) {
    const {name, value } = event.target;
    const index = event.target.dataset.index;
    setEmploymentData((prevEmploymentData) => {
      const updatedEmploymentData = [...prevEmploymentData];
      updatedEmploymentData[index] = {
        ...prevEmploymentData[index],
        [name]: value,
      };
      return updatedEmploymentData;
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
            {educationData.map((educationItem, index) => (
              <EducationItem
                educationData={educationData}
                eventKey={index}
                handleEducationChange={handleEducationChange}
                key={index}
                />
            ))}
            <button className="add-education-button"onClick={addNewEducationItem}>
            <i className="fa-solid fa-plus"></i>
              Add additional education
              </button>
          </Accordion>
          <h1>Employment History</h1>
          <Accordion defaultActiveKey="0">
            {educationData.map((employmentItem, index) => (
              <EmploymentItem
                employmentData={employmentData}
                eventKey={index}
                handleEmploymentChange={handleEmploymentChange}
                key={index}
              />
            ))}
            <button className="add-education-button"onClick={addNewEducationItem}>
            <i className="fa-solid fa-plus"></i>
              Add additional employment
            </button>
          </Accordion>
      </form>
      <div className="right">
        
      </div>
    </>
  )
}

export default App
