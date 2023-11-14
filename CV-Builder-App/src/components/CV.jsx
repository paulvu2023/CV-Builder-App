export default function CV({detailsData, educationData, employmentData, skillsData}) {
  return (
    <div className="cv">
      <div className="cv-left">
        <div className="subheader white">Contact</div>
        <div className="wrapper">
          <h2 className="white">Phone</h2>
          <div className="white">{detailsData.phoneNumber || '012-345-6789'}</div>
        </div>
        <div className="wrapper">
          <h2 className="white">Email</h2>
          <div className="white">{detailsData.email || 'example@gmail.com'}</div>
        </div>
        <div className="wrapper">
          <h2 className="white">Location</h2>
          <div className="white">
            {detailsData.city || detailsData.country
              ? `${detailsData.city || ''}${detailsData.country && `, ${detailsData.country}`}`
              : 'City, Country'}
          </div>
        </div>
        <div className="subheader white">Education</div>
        {educationData.length > 1 ? (
          educationData.map((educationItem, index) => (
            <div key={index} className="wrapper">
              <div className="white">
                {educationItem.startDate}
                {educationItem.endDate && ` - ${educationItem.endDate}`}
              </div>
              <h2 className="white">{educationItem.degree}</h2>
              <div className="white">{educationItem.school}</div>
            </div>
          ))
        ) : (
          <>
            <div className="wrapper">
              <div className="white">Start Date - End Date</div>
              <h2 className="white">Degree</h2>
              <div className="white">School</div>
            </div>
            <div className="wrapper">
              <div className="white">Start Date - End Date</div>
              <h2 className="white">Degree</h2>
              <div className="white">School</div>
            </div>
          </>
        )}
        <div className="subheader white">Expertise</div>
        <ul>
          {skillsData.length >= 1 ?
          skillsData.map((skillsItem, index) => {
            return (
              <li className="white" key={index}>{skillsItem}</li>
            )
          }) : 
          <>
            <li className="white">Skill 1</li>
            <li className="white">Skill 2</li>
            <li className="white">Skill 3 </li>
            <li className="white">Skill 4</li>
            <li className="white">Skill 5</li>
            <li className="white">Skill 6 </li>
          </>
          }
        </ul>
      </div>

      <div className="cv-right">

      </div>
    </div>
  )
}