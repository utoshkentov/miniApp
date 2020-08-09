import React, {useState} from "react";
import {connect} from 'react-redux';
import {addCourse} from "../../redux/Courses/coursesActions";

const CourseListPage = ({courses, addCourse}) => {
    const [courseName, setCourseName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addCourse(courseName)
    };


    return(
        courses.length===0 ? (
            <div>
                <h1>Create Your First Course</h1>
                <form className='form-group d-flex' onSubmit={handleSubmit}>
                    <label>Pick a name: </label>
                    <input className='form-control w-25' value={courseName} onChange={e => setCourseName(e.target.value)} type="text"/>
                </form>
                <button type='submit' className='btn btn-success'>Create A Course</button>
            </div>
        ):(
            <div>
                <ul className='list-group'>
                    {courses.map((course) => {
                        return(
                            <li key={course.id}>{course.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    )
};

const mapState = (state) => {
    return{
        courses: state.courses.courses
    }
};

export default connect(mapState, {addCourse})(CourseListPage);