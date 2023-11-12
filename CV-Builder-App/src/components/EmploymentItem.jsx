import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

export default function employmentItem({employmentData, eventKey, handleEmploymentChange}) {
  const jobText = employmentData[eventKey].jobTitle ? `${employmentData[eventKey].jobTitle} at ` : '';
  return (<Accordion.Item eventKey={eventKey.toString()}>
    <Accordion.Header>{jobText}{employmentData[eventKey].employer}</Accordion.Header>
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
      <label>
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
    <label className="professional-summary-label">
        Description
        <textarea
        name="summary"
        value={employmentData.description}
        onChange={handleEmploymentChange}
        placeholder="Developed visually stunning websites with a focus on user-friendliness and design..." />
      </label>
    </Accordion.Body>
  </Accordion.Item>)
}