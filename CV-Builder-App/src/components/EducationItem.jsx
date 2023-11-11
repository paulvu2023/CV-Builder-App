import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

export default function EducationItem({educationData, eventKey, handleEducationChange}) {
  const degreeText = educationData[eventKey].degree ? `${educationData[eventKey].degree} at ` : '';
  return (<Accordion.Item eventKey={eventKey.toString()}>
    <Accordion.Header>{degreeText}{educationData[eventKey].school}</Accordion.Header>
    <Accordion.Body>
    <label style={{ margin: '0' }}>
      School
      <input
      data-index={eventKey}
      value={educationData[eventKey].school}
      type="text" 
      name='school'
      onChange={handleEducationChange}
      ></input>
    </label>
    <label>
      Degree
      <input
      data-index={eventKey}
      value={educationData[eventKey].degree}
      type="text" 
      name='degree'
      onChange={handleEducationChange}
      ></input>
    </label>
    <div className="form-row">
      <label>
        Start Date
        <input
        data-index={eventKey}
        value={educationData[eventKey].startDate}
        type="text" 
        name='startDate'
        onChange={handleEducationChange}
        ></input>
      </label>
      <label>
        End Date
        <input
        data-index={eventKey}
        value={educationData[eventKey].endDate}
        type="text" 
        name='endDate'
        onChange={handleEducationChange}
        ></input>
      </label>
    </div>
    <label>
        Location
        <input
        data-index={eventKey}
        value={educationData[eventKey].location}
        type="text" 
        name='location'
        onChange={handleEducationChange}
        ></input>
      </label>
    </Accordion.Body>
  </Accordion.Item>)
}