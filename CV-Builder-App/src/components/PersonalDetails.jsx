export default function PersonalDetails({formData, handleChange}) {
  return (
    <>
      <div className="logo-text">
        <img src="./logo.png" className="logo"/>
        CV Craft
      </div>
      <div className="personal-details">
        <h1>Personal Details</h1>
        <div className="container">
          <div className="form-left">
            <label>
              First Name
              <input
              value={formData.firstName}
              type="text" 
              name='firstName'
              onChange={handleChange}
              ></input>
            </label>
            <label>
            Email
            <input
            value={formData.email}
            type="email" 
            name='email'
            onChange={handleChange}
            ></input>
          </label>
            <label>
              Country
              <input
              value={formData.country}
              type="text" 
              name='country'
              onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="form-right">
            <label>
              Last Name
              <input
              value={formData.lastName}
              type="text" 
              name='lastName'
              onChange={handleChange}
              ></input>
            </label>
            <label>
              City
              <input
              type="text" 
              name='city'
              value={formData.city}
              onChange={handleChange}
              ></input>
            </label>
            <label>
              Phone Number
              <input
              type="tel" 
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              ></input>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}