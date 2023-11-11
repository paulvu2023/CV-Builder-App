import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

export default function EducationItem({eventKey}) {
  return (<Accordion.Item eventKey={eventKey}>
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
    <label>
      Wanted Job Title
      <input
      // value={detailsData.wantedJobTitle}
      type="text" 
      name='wantedJobTitle'
      // onChange={handleDetailsChange}
      ></input>
    </label>
    </Accordion.Body>
  </Accordion.Item>)
}