export default function PersonalDetails({handleChange}) {
  return (
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
    </div>
  )
}