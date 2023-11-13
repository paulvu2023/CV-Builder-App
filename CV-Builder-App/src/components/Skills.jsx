export default function Skills({skillsData, addSkill, removeSkill}) {
  return (
    <>
      <h1>Skills</h1>
      <label className="professional-summary-label">
        Choose important skills that show you fit the position. Make sure they match the key skills in the job listing.
      </label>
      <form onSubmit={addSkill} className="skills-form">
        <input type="text" id="skill"/>
        <button className="skill-button">Add Skill</button>
      </form>
      {skillsData.map((skill) => {
        return (
          <div key={skill} className="skill-item">
            <div>{skill}</div>
            <i onClick={() => {removeSkill(skill)}} className="fa-solid fa-trash"></i>
          </div>
        )
      })}
    </>
  )
}