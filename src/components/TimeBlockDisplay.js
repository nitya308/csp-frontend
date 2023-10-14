import React from "react";

function TimeBlockDisplay({ timeBlock, onDeleteTimeBlock }) {
  const timeBlockStyle = {
    border: "1px solid #ccc",
    margin: "10px 0px",
    padding: "10px",
    backgroundColor: '#FFFFFF',
    borderRadius: "5px",
    width: 'fit-content'
  };

  const spanStyle = {
    fontSize: "16px",
    fontWeight: 500,
    marginRight: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: 600,
  };

  return (
    <div style={timeBlockStyle} className="time-block">
      <span style={spanStyle}>
        {timeBlock.day} {timeBlock.startTime} - {timeBlock.endTime}
      </span>
      <button
        style={buttonStyle}
        onClick={() => onDeleteTimeBlock(timeBlock)}
      >
        Delete
      </button>
    </div>
  );
}

export default TimeBlockDisplay;
