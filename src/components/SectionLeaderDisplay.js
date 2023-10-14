import React from "react";

function StudentLeaderDisplay({ studentLeader, timeslots, timesAvailable, onDeleteLeader }) {
  console.log(timesAvailable)
  return (
    <div style={containerStyle}>
      <p>Name: {studentLeader.name}</p>
      <p>Gender: {studentLeader.gender}</p>
      Timeslots:
        {timesAvailable.map((val, index) => (
            <label key={val.day + val.startTime}>
              <input type="checkbox" checked={val.selected} readOnly />
              {timeslots[index].day + " " + timeslots[index].startTime + "-" + timeslots[index].endTime}
            </label>
        ))}
      <button
        style={buttonStyle}
        onClick={() => onDeleteLeader(studentLeader)}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentLeaderDisplay;

const containerStyle = {
  border: "1px solid #ccc",
  margin: "10px 0px",
  marginRight: "10px",
  padding: "10px",
  backgroundColor: '#FFFFFF',
  borderRadius: "5px",
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column'

};
const buttonStyle = {
  backgroundColor: "#e74c3c",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  fontWeight: 600,
  marginTop: "20px"
};
