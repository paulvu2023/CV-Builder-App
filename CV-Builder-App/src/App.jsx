import { useState } from 'react'
import PersonalDetails from "./components/PersonalDetails"
import ProfessionalSummary from "./components/ProfessionalSummary"
import EducationItem from './components/EducationItem'
import EmploymentItem from './components/EmploymentItem'
import CV from './components/CV'
import Skills from './components/Skills'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

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

  const [skillsData, setSkillsData] = useState([])

  function addSkill(event) {
    event.preventDefault();
    const value = document.getElementById('skill').value
    if (value) {
      document.getElementById('skill').value = ''
      setSkillsData((prevSkillsData) => {
        return [
          ...prevSkillsData,
          value
        ]
      })
    }
  }

  function removeSkill(skill){
    const newSkillsData = skillsData.filter(skillItem => skillItem !== skill);
    setSkillsData(newSkillsData);
  }

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

  function addNewEmploymentItem() {
    setEmploymentData((prevEmploymentData) => {
      const newEmploymentData = [...prevEmploymentData];
      newEmploymentData.push({
        index: employmentData.length,
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
      })      
      return newEmploymentData;
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function downloadResume() {
    const cvNode = document.querySelector('.cv');
    const width = 900;
    const height = 1100;
  
    cvNode.style.margin = '0px';
  
    htmlToImage.toPng(cvNode, { width, height })
      .then(function (dataUrl) {
        cvNode.style.marginLeft = '0px';
  
        download(dataUrl, 'my-resume.png');
        cvNode.style.margin = '40px';
      })
      .catch(function (error) {
        cvNode.style.margin = '40px';
        console.error('Error capturing image:', error);
      });
  }

  return (
    <>
      <div className='left'>
        <form onSubmit={handleSubmit}>
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
              <button type="button" className="add-education-button" onClick={addNewEducationItem}>
                <i className="fa-solid fa-plus"></i>
                Add additional education
              </button>
            </Accordion>
            <h1>Employment History</h1>
            <Accordion defaultActiveKey="0">
              {employmentData.map((employmentItem, index) => (
                <EmploymentItem
                  employmentData={employmentData}
                  eventKey={index}
                  handleEmploymentChange={handleEmploymentChange}
                  key={index}
                />
              ))}
              <button type="button" className="add-education-button" onClick={addNewEmploymentItem}>
                <i className="fa-solid fa-plus"></i>
                Add additional employment
              </button>
            </Accordion>
        </form>
        <Skills
        skillsData={skillsData}
        addSkill={addSkill}
        removeSkill={removeSkill}
        />
      </div>

      <div className="right">
        <CV
          detailsData={detailsData}
          educationData={educationData}
          employmentData={employmentData}
          skillsData={skillsData}
          downloadResume={downloadResume}
        />
      </div>
    </>
  )
}

export default App
