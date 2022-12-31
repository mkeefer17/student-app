import './App.css';
import { useState } from "react";
import StudentList from './components/StudentList';
// import ClassInfo from './components/ClassInfo';

// > > > > Our goal is to ensure that App is managing each student's isPresent data < < < < 

function App() {
  const [studentData, setStudentData] = useState([
    {
        id: 1,
        name: 'Ada',
        email: 'ada@dev.org',
        isPresentData: false
    },
    {
        id: 2,
        name: 'Sue',
        email: 'sue@dev.org',
        isPresentData: false
    },
    {
        id: 3,
        name: 'Gary',
        email: 'gary@dev.org',
        isPresentData: false
    }
  ]);

  const updateStudentData = updatedStudent => {
    const students = studentData.map(student => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    })
    setStudentData(students);
  }

  return (
    <main>
        <h1>Attendance</h1>
        <StudentList students={studentData} onUpdateStudent={updateStudentData}
        ></StudentList>
    </main>
  );
}

export default App;
