import React, { useState } from "react";

function TimeBlockInput({ onAddTimeBlock }) {
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeBlocks, setTimeBlocks] = useState([]); // Store time blocks

  const handleAddTimeBlock = () => {
    if (startTime && endTime && day) {
      const newTimeBlock = { day, startTime, endTime };
      onAddTimeBlock(newTimeBlock);
      setDay("");
      setStartTime("");
      setEndTime("");
    }
  };

  const handleDeleteTimeBlock = (index) => {
    const updatedTimeBlocks = [...timeBlocks];
    updatedTimeBlocks.splice(index, 1);
    setTimeBlocks(updatedTimeBlocks);
  };

  return (
    <div className="time-block-input" style={timeBlockStyle}>
      <input
        type="text"
        placeholder="Day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Start Time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="End Time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        style={inputStyle}
      />
      <button style={addButtonStyle} onClick={handleAddTimeBlock}>
        Add Time Block
      </button>
      <div className="time-blocks">
        {timeBlocks.map((timeBlock, index) => (
          <div key={index} style={timeBlockRowStyle}>
            <span>{timeBlock.startTime} - {timeBlock.endTime}</span>
            <button onClick={() => handleDeleteTimeBlock(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const addButtonStyle = {
  backgroundColor: "#27ae60", // Green color
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

const timeBlockRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  margin: "10px 0", // Add space below each time block row
  border: "1px solid #ccc",
  backgroundColor: "#f7f7f7",
  borderRadius: "5px",
};

const timeBlockStyle = {
  margin: "10px 0px",
  borderRadius: "5px",
  width: 'fit-content',
  display: 'flex',
};

const inputStyle = {
  marginRight: "10px", // Add space below each input box
};


export default TimeBlockInput;
