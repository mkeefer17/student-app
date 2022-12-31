import './App.css';
import StudentList from './components/StudentList';
// import ClassInfo from './components/ClassInfo';

// > > > > Our goal is to ensure that App is managing each student's isPresent data < < < < 

function App() {
  const studentData = [
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
  ];

  return (
    <main>
        <h1>Attendance</h1>
        <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
