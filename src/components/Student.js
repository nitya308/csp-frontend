import React from "react";

function Student({ name, gender, freeTimeBlocks }) {
  const studentStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const infoStyle = {
    flex: 1,
  };

  return (
    <div className="student" style={studentStyle}>
      <div style={infoStyle}>
        <h3>{name}</h3>
        <p>Gender: {gender}</p>
        <p>Free Time Blocks: {freeTimeBlocks.join(", ")}</p>
      </div>
      <button>Delete</button> {/* Add a delete button */}
    </div>
  );
}

export default Student;
