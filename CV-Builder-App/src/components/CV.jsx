export default function CV({detailsData, educationData, employmentData}) {
  return (
    <div className="cv">
      <div className="cv-left">
        <div className="subheader white">Contact</div>
        <div className="wrapper">
          <h2 className="white">Phone</h2>
          <div className="white">{detailsData.phoneNumber}</div>
        </div>
        <div className="wrapper">
          <h2 className="white">Email</h2>
          <div className="white">{detailsData.email}</div>
        </div>
        <div className="wrapper">
          <h2 className="white">Location</h2>
          <div className="white">{detailsData.city}{detailsData.country && `, ${detailsData.country}`}</div>
        </div>
        <div className="subheader white">Education</div>
        {educationData.map((educationItem, index) => {
          return (
            <div key={index} className="wrapper">
              <div className="white">{educationItem.startDate}{educationItem.endDate && ` - ${educationItem.endDate}`}</div>
              <h2 className="white">{educationItem.degree}</h2>
              <div className="white">{educationItem.school}</div>
            </div>
          )
        })}
        {/* Add Skills Here */}
      </div>

      <div className="cv-right">

      </div>
    </div>
  )
}