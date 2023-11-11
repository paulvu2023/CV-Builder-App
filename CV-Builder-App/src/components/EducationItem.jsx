import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

export default function EducationItem({educationData, eventKey}) {
  return (<Accordion.Item eventKey={eventKey.toString()}>
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
    <label style={{ margin: '0' }}>
      School
      <input
      value={educationData[eventKey].school}
      type="text" 
      name='school'
      // onChange={handleDetailsChange}
      ></input>
    </label>
    <label>
      Degree
      <input
      value={educationData[eventKey].degree}
      type="text" 
      name='degree'
      // onChange={handleDetailsChange}
      ></input>
    </label>
    <div className="form-row">
      <label>
        Start Date
        <input
        value={educationData[eventKey].startDate}
        type="text" 
        name='startDate'
        // onChange={handleDetailsChange}
        ></input>
      </label>
      <label>
        End Date
        <input
        value={educationData[eventKey].endDate}
        type="text" 
        name='endDate'
        // onChange={handleDetailsChange}
        ></input>
      </label>
    </div>
    <label>
        Location
        <input
        value={educationData[eventKey].location}
        type="text" 
        name='location'
        // onChange={handleDetailsChange}
        ></input>
      </label>
    </Accordion.Body>
  </Accordion.Item>)
}