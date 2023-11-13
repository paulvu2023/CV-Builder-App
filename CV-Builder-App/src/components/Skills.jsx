export default function Skills({addSkill}) {
  return (
    <>
      <h1>Skills</h1>
      <label className="professional-summary-label">
        Choose important skills that show you fit the position. Make sure they match the key skills in the job listing.
      </label>
      <form onSubmit={addSkill}>
        <input type="text" id="skill"/>
        <button className="skill-button">Add Skill</button>
      </form>
    </>
  )
}