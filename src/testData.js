const initialLeaders = [
  {
    key: "Nitya",
    name: "Nitya",
    gender: "F",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: false },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: false },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: true }
    ]
  },
  {
    key: "Max",
    name: "Max",
    gender: "M",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: false },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: true }
    ]
  },
  {
    key: "Carter",
    name: "Carter",
    gender: "M",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: false },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: true }
    ]
  }

]

const initialStudents = [
  {
    key: "Alice",
    name: "Alice",
    gender: "F",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: true }
    ]
  },
  {
    key: "Sally",
    name: "Sally",
    gender: "F",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: false },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: true }
    ]
  },
  {
    key: "Bob",
    name: "Bob",
    gender: "M",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: false },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: false }
    ]
  },
  {
    key: "Chris",
    name: "Chris",
    gender: "M",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: false }
    ]
  },
  {
    key: "Lidian",
    name: "Lidian",
    gender: "F",
    timesAvailable: [
      { day: 'Monday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '5:30PM', endTime: '6:30PM', selected: true },
      { day: 'Tuesday', startTime: '6:30PM', endTime: '7:30PM', selected: false }
    ]
  }
]

export {initialLeaders, initialStudents}