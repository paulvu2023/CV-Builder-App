export default function CV({detailsData, educationData, employmentData, skillsData}) {
  return (
    <>
      <div className="cv">
        <div className="cv-left">
          <div className="subheader white">Contact</div>
          <div className="wrapper">
            <h2 className="white">Phone</h2>
            <div className="white smaller">{detailsData.phoneNumber || '012-345-6789'}</div>
          </div>
          <div className="wrapper">
            <h2 className="white">Email</h2>
            <div className="white smaller">{detailsData.email || 'example@gmail.com'}</div>
          </div>
          <div className="wrapper">
            <h2 className="white">Location</h2>
            <div className="white smaller">
              {detailsData.city || detailsData.country
                ? `${detailsData.city || ''}${detailsData.country && `, ${detailsData.country}`}`
                : 'City, Country'}
            </div>
          </div>
          <div className="subheader white">Education</div>
          {educationData[0].school ? (
            educationData.map((educationItem, index) => (
              <div key={index} className="wrapper">
                <div className="white smaller">
                  {educationItem.startDate}
                  {educationItem.endDate && ` - ${educationItem.endDate}`}
                </div>
                <h2 className="white">{educationItem.degree}</h2>
                <div className="white smaller">{educationItem.school}</div>
              </div>
            ))
          ) : (
            <>
              <div className="wrapper">
                <div className="white smaller">Start Date - End Date</div>
                <h2 className="white">Degree</h2>
                <div className="white smaller">School</div>
              </div>
              <div className="wrapper">
                <div className="white smaller">Start Date - End Date</div>
                <h2 className="white">Degree</h2>
                <div className="white smaller">School</div>
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
              <li className="white smaller">Skill 1</li>
              <li className="white smaller">Skill 2</li>
              <li className="white smaller">Skill 3 </li>
              <li className="white smaller">Skill 4</li>
              <li className="white smaller">Skill 5</li>
              <li className="white smaller">Skill 6 </li>
            </>
            }
          </ul>
        </div>

        <div className="cv-right">
          <h1><span>{detailsData.firstName || 'John'}</span> {detailsData.lastName || 'Doe'}</h1>
          <h2>{detailsData.wantedJobTitle || 'Job Title'}</h2>
          <p>{detailsData.summary || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, voluptatibus deleniti in rerum tempore, dolor ipsa minima excepturi sapiente eligendi eius quo, ducimus unde odio velit consequuntur culpa neque officia!'}</p>
          <div className="subheader dark-blue">Experience</div>
          {employmentData[0].jobTitle ? (
            employmentData.map((employmentItem) => (
              <div key={employmentItem.jobTitle} className="experience-item">
                <div className="bold">{employmentItem.startDate} - {employmentItem.endDate}</div>
                <div>{employmentItem.company} | {employmentItem.location}</div>
                <h5 className="bold">{employmentItem.jobTitle}</h5>
                <p>{employmentItem.description}</p>
              </div>
            ))
          ) : (
          <>
            {[1, 2, 3].map((index) => (
              <div key={index} className="experience-item">
                <div className="bold smaller">Start - End</div>
                <div className="smaller">Company | Location</div>
                <h5 className="bold smaller">Job Title</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lectus ut orci congue imperdiet.</p>
              </div>
            ))}
          </>
          )}
        </div>
      </div>
    </>
  )
}