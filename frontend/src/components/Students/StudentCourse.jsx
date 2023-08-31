import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import './style.css';

const StudentCourse = () => {
    const [courses, setCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [unenrolledCourses, setUnenrolledCourses] = useState([]);

    // Use the useSelector hook to get data from the Redux state
    const studentLogin = useSelector(state => state.studentLogin);
    const studentId = studentLogin.studentInfo ? studentLogin.studentInfo._id : null;
    // console.log(studentId);
    useEffect(() => {
        async function fetchCourses() {
            try{
                const response = await axios.get('/api/course/all');
                setCourses(response.data);
            } catch(error){
                console.error('Error fetching courses:',error);
            }
        }

        // Fetch courses when the component mounts
        fetchCourses();
        // console.log('My total courses : ',courses);
    },[]);

    useEffect(() => {
        async function fetchEnrolledCourses() {
            try{
                // const response = await axios.get('/api/student/enrolled-courses') // this is not correct
                const response = await axios.get(`/api/student/${studentId}/enrolled-courses`)
                setEnrolledCourses(response.data);
            } catch (error) {
                console.error('Error fetching enrolled courses: ',error)
            }
        }

        // Fetch enrolled courses when the component mounts
        fetchEnrolledCourses();
        // console.log('My total Enrolled courses : ',enrolledCourses);
    },[]);

    // modified ke baad
    useEffect(() => {
        const enrolledCourseIds = enrolledCourses.map(course => course._id);
        const unenrolled = courses.filter(course => !enrolledCourseIds?.includes(course._id));
        console.log("hi hi UNENROLLED is : ", unenrolled)
        setUnenrolledCourses(unenrolled);
    },[courses, enrolledCourses]);

    const isEnrolled = (courseId) => {
        return enrolledCourses.some(course => course._id === courseId);
    };

    const handleEnroll = async (courseId) => {
        try {
            await axios.post(`/api/student/${studentId}/enroll`, { courseId });
            setEnrolledCourses([...enrolledCourses, {_id : courseId}]);

            window?.location.reload();

        } catch(error) {
            console.error('Error enrolling in course: ', error);
        }
    };

    // unenroll waala
    const handleUnenroll = async (courseId) => {
        try {
            await axios.post(`api/student/${studentId}/unenroll`, { courseId }); 
            setEnrolledCourses(enrolledCourses?.filter(course=> course._id !== courseId));
            window?.location.reload();
        } catch (error) {
            console.error('Error unenrolling from course: ', error);
        }
    };

    return (
        <div>
            <div className="enrolled-course-list">
  <h2>Enrolled Course List</h2>
  <ul className="course-list">
    {enrolledCourses?.map(course => (
      <li className="course-item" key={course._id}>
        <div className="course-info">
          <p className="course-name">{course.course_name}</p>
          <p className="course-units">Units: {course.total_units}</p>
          {/* <p className="course-teacher">Teacher: {course.created_by.tchr_name}</p> */}
        </div>
        <button className="unenroll-button" onClick={() => handleUnenroll(course._id)}>
          Unenroll
        </button>
      </li>
    ))}
  </ul>
</div>





            <div className="enrolled-course-list">
  <h2>Unenrolled Courses List</h2>
  <ul className="course-list">
    {unenrolledCourses?.map(course => (
      <li className="course-item" key={course._id}>
        <div className="course-info">
          <p className="course-name">{course.course_name}</p>
          <p className="course-units">Units: {course.total_units}</p>
          {/* <p className="course-teacher">Teacher: {course.created_by.tchr_name}</p> */}
        </div>
        <button className="enroll-button" onClick={() => handleEnroll(course._id)}>
          Enroll
        </button>
      </li>
    ))}
  </ul>
</div>

        </div>
    )
}

export default StudentCourse;