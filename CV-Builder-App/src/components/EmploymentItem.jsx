import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

export default function EmploymentItem({employmentData, eventKey, handleEmploymentChange}) {
  const jobText = employmentData[eventKey].company ? ` at ${employmentData[eventKey].company}` : '';
  return (<Accordion.Item eventKey={eventKey.toString()}>
    <Accordion.Header>{employmentData[eventKey].jobTitle}{jobText}</Accordion.Header>
    <Accordion.Body>
      <div className="form-row">
        <label style={{ margin: '0' }}>
          Job Title
          <input
          data-index={eventKey}
          value={employmentData[eventKey].jobTitle}
          type="text" 
          name='jobTitle'
          onChange={handleEmploymentChange}
          ></input>
        </label>
        <label style={{ margin: '0' }}>
          Company Name
          <input
          data-index={eventKey}
          value={employmentData[eventKey].company}
          type="text" 
          name='company'
          onChange={handleEmploymentChange}
          ></input>
        </label>
      </div>
      <label>
        Location
        <input
        data-index={eventKey}
        value={employmentData[eventKey].location}
        type="text" 
        name='location'
        onChange={handleEmploymentChange}
        ></input>
      </label>
      <div className="form-row">
        <label>
          Start Date
          <input
          data-index={eventKey}
          value={employmentData[eventKey].startDate}
          type="text" 
          name='startDate'
          onChange={handleEmploymentChange}
          ></input>
        </label>
        <label>
          End Date
          <input
          data-index={eventKey}
          value={employmentData[eventKey].endDate}
          type="text" 
          name='endDate'
          onChange={handleEmploymentChange}
          ></input>
        </label>
      </div>
      <label className="employment-label">
        Description
        <textarea
        data-index={eventKey}
        name="description"
        value={employmentData[eventKey].description}
        onChange={handleEmploymentChange}
        placeholder="Developed visually stunning websites with a focus on user-friendliness and design..." />
      </label>
    </Accordion.Body>
  </Accordion.Item>)
}