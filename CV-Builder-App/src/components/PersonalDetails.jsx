export default function PersonalDetails({handleChange}) {
  return (
    <>
      <div className="logo-text">
        <img src="./logo.png" className="logo"/>
        CV Craft
      </div>
      <div className="personal-details">
        <h1>Personal Details</h1>
        <label>
          First Name
          <input
          type="text" 
          name='firstName'
          onChange={handleChange}
          ></input>
        </label>
        <label>
          Last Name
          <input
          type="text" 
          name='lastName'
          onChange={handleChange}
          ></input>
        </label>
        <label>
          Email
          <input
          type="email" 
          name='email'
          onChange={handleChange}
          ></input>
        </label>
        <label>
          Phone Number
          <input
          type="tel" 
          name='phoneNumber'
          onChange={handleChange}
          ></input>
        </label>
        <label>
          Country
          <input
          type="text" 
          name='country'
          onChange={handleChange}
          ></input>
        </label>
        <label>
          City
          <input
          type="text" 
          name='city'
          onChange={handleChange}
          ></input>
        </label>
      </div>
    </>
  )
}