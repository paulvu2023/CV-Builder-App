export default function PersonalDetails({detailsData, handleDetailsChange}) {
  return (
    <>
      <div className="logo-text">
        <img src="./logo.png" className="logo"/>
        CV Craft
      </div>
      <div className="personal-details">
        <h1>Personal Details</h1>
        <label>
            Wanted Job Title
            <input
            value={detailsData.wantedJobTitle}
            type="text" 
            name='wantedJobTitle'
            onChange={handleDetailsChange}
            ></input>
          </label>
        <div className="container">
          <div className="form-left">
            <label>
              First Name
              <input
              value={detailsData.firstName}
              type="text" 
              name='firstName'
              onChange={handleDetailsChange}
              ></input>
            </label>
            <label>
            Email
            <input
            value={detailsData.email}
            type="email" 
            name='email'
            onChange={handleDetailsChange}
            ></input>
          </label>
            <label>
              Country
              <input
              value={detailsData.country}
              type="text" 
              name='country'
              onChange={handleDetailsChange}
              ></input>
            </label>
          </div>
          <div className="form-right">
            <label>
              Last Name
              <input
              value={detailsData.lastName}
              type="text" 
              name='lastName'
              onChange={handleDetailsChange}
              ></input>
            </label>
            <label>
              City
              <input
              type="text" 
              name='city'
              value={detailsData.city}
              onChange={handleDetailsChange}
              ></input>
            </label>
            <label>
              Phone Number
              <input
              type="tel" 
              name='phoneNumber'
              value={detailsData.phoneNumber}
              onChange={handleDetailsChange}
              ></input>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}