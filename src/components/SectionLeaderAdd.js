import React, { useState } from "react";

function StudentLeaderForm({ onAddStudentLeader, timeslots }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [timesAvailable, setTimesAvailable] = useState(Array(timeslots.length).fill(false))

  const handleAddStudentLeader = () => {
    const newStudentLeader = {
      name,
      gender,
      timesAvailable
    };
    onAddStudentLeader(newStudentLeader);
    setName("");
    setGender("");
    setTimesAvailable(Array(timeslots.length).fill(false));
  };

  const handleTimeslotChange = (index) => {
    const updatedTimeslots = [...timeslots];
    updatedTimeslots[index].selected = !updatedTimeslots[index].selected;
    setTimesAvailable(updatedTimeslots);
  };

  return (
    <>
    <h2>Add Student Leader</h2>
    <div style={formStyle}>
      <div style={inputStyle}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={inputStyle}>
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div style={formItem}>
        <p>Times Available:</p>
        {timeslots.map((timeslot, index) => (
          <div>
          <label key={index}>
            <input
              style={inputStyle}
              type="checkbox"
              checked={timeslot.selected}
              onChange={() => handleTimeslotChange(index)}
            />
            {timeslot.day + " " + timeslot.startTime + "-" + timeslot.endTime}
          </label>
          </div>
        ))}
      </div>
      <div style={formItem}>
        <button style={addButtonStyle} onClick={handleAddStudentLeader}>Add Student Leader</button>
      </div>
    </div>
    </>
  );
}

export default StudentLeaderForm;

const addButtonStyle = {
  backgroundColor: "#27ae60", // Green color
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

const formItem = {
  marginLeft: "20px",
  marginRight: "20px"
}

const formStyle = {
  margin: "10px 0px",
  borderRadius: "5px",
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: '#FFFFFF',
};

const inputStyle = {
  marginRight: "10px",
};