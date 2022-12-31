import React from "react";
import './StudentList.css';
import Student from "./Student";
import PropTypes from 'prop-types';

const StudentList = (props) => {

    const studentComponents = props.students.map((student) => {
        return (
            <li key={student.id}>
                <Student
                    id={student.id}
                    name={student.name}
                    email={student.email}
                    isPresent={student.isPresentData}
                ></Student>
            </li>
        )
    })

    return (
        <section>
            <h2 className="student-list__heading">Student List</h2>
            <ul className="student-list">
                {studentComponents}
            </ul>
        </section>
        
    );
}

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool
    }))
}

export default StudentList;