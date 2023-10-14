import React, { useState } from "react";
import "./App.css";
import TimeBlockInput from "./components/TimeBlockAdd";
import TimeBlockDisplay from "./components/TimeBlockDisplay";
import StudentLeaderDisplay from "./components/SectionLeaderDisplay"
import StudentLeaderForm from "./components/SectionLeaderAdd";
import StudentDisplay from "./components/StudentDisplay";
import StudentAdd from "./components/StudentAdd";
import { initialStudents, initialLeaders } from "./testData";
import axios from 'axios';

function App() {


  const [apiResponse, setApiResponse] = useState(null);
  const handleApiCall = () => {
    const apiUrl = 'https://csp-api.onrender.com/';
    const data = {};
    data['num_leaders'] = studentLeaders.length
    data['times'] = timeBlocks.map((block, idx) =>
      block.day + " " + block.startTime + "-" + block.endTime
    )
    data['students'] = []
    studentLeaders.forEach((leader) => {
      const timesArray = []
      leader.timesAvailable.forEach((time, idx) => {
        if (time.selected) {
          timesArray.push(idx)
        }
      }
      )
      data.students.push([leader.name, leader.gender, timesArray])
    }
    )
    students.forEach((student) => {
      const timesArray = []
      student.timesAvailable.forEach((time, idx) => {
        if (time.selected) {
          timesArray.push(idx)
        }
      }
      )
      data.students.push([student.name, student.gender, timesArray])
    }
    )

    axios.post(apiUrl, data)
      .then((response)=> setApiResponse(response.data.result))
      .catch((error) => console.error(error));
  };

  const [timeBlocks, setTimeBlocks] = useState([
    {
      day: "Monday",
      startTime: "5:30PM",
      endTime: "6:30PM"
    },
    {
      day: "Tuesday",
      startTime: "5:30PM",
      endTime: "6:30PM"
    },
    {
      day: "Tuesday",
      startTime: "6:30PM",
      endTime: "7:30PM"
    }
  ]);

  const addTimeBlock = (newTimeBlock) => {
    console.log(newTimeBlock)
    setTimeBlocks([...timeBlocks, newTimeBlock]);
  };

  const deleteTimeBlock = (timeBlockToDelete) => {
    const updatedTimeBlocks = timeBlocks.filter(
      (timeBlock) => timeBlock !== timeBlockToDelete
    );
    setTimeBlocks(updatedTimeBlocks);
  };

  const [studentLeaders, setStudentLeaders] = useState(initialLeaders);
  const handleAddStudentLeader = (newStudentLeader) => {
    setStudentLeaders([...studentLeaders, newStudentLeader]);
  };
  const handleDeleteLeader = (leaderToDelete) => {
    const updatedLeaders = studentLeaders.filter(
      (leader) => leader !== leaderToDelete
    );
    setStudentLeaders(updatedLeaders);
  };

  const [students, setStudents] = useState(initialStudents);
  const handleAddStudent = (newStudent) => {
    setStudents([...studentLeaders, newStudent]);
  };
  const handleDeleteStudent = (studentToDelete) => {
    const updatedStudents = students.filter(
      (student) => student !== studentToDelete
    );
    setStudents(updatedStudents);
  };


  return (
    <div className="App">
      <h1>CS1 Sections Scheduler</h1>

      <h2>Add and Edit Time Blocks</h2>
      <div className="time-blocks">
        {timeBlocks.map((timeBlock, index) => (
          <TimeBlockDisplay
            key={index}
            timeBlock={timeBlock}
            onDeleteTimeBlock={deleteTimeBlock}
          />
        ))}
        <TimeBlockInput onAddTimeBlock={addTimeBlock} />
      </div>

      <h2>Section Leader Information</h2>
      <div className="section-leaders">
        <div className="student-leaders">
          {studentLeaders.map((studentLeader, index) => (
            <StudentLeaderDisplay
              key={index}
              studentLeader={studentLeader}
              timeslots={timeBlocks}
              timesAvailable={studentLeader.timesAvailable}
              onDeleteLeader={handleDeleteLeader}
            />
          ))}
        </div>
        <StudentLeaderForm onAddStudentLeader={handleAddStudentLeader} timeslots={timeBlocks} />
      </div>

      <h2>Student Information</h2>
      <div className="students">
        <div className="student-display">
          {students.map((student, index) => (
            <StudentDisplay
              key={index}
              student={student}
              timeslots={timeBlocks}
              timesAvailable={student.timesAvailable}
              onDeleteStudent={handleDeleteStudent}
            />
          ))}
        </div>
        <StudentAdd onAddStudent={handleAddStudent} timeslots={timeBlocks} />
      </div>

      <div className="center-align">
        <button className="submit-button" onClick={handleApiCall}>
          Submit and Get Results
        </button>
      </div>

      {apiResponse && (
        <div>
          <h3>Section Assignments:</h3>
          <pre>{apiResponse}</pre>
        </div>
      )}

    </div>
  );
}

export default App;
