import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse, deleteCourse, getSpecificCourses } from '../actions/courseActions';
import { NavLink } from "react-router-dom";
import axios from 'axios';

function TeacherCourseProfile() {

  const specificCourseList = useSelector(state => state.specificCourseList)
  let {loading:scLoading, error:scError, spcfcourses} = specificCourseList
  spcfcourses = spcfcourses.reverse()

  const [courseName, setCourseName] = useState('')
  const [courseOutline, setCourseOutline] = useState('')
  const [courseUnits, setCourseUnits] = useState('')
  const [courseId, setCourseId] = useState('')


  const dispatch = useDispatch()


  // done by me
  useEffect(() => {
    dispatch(getSpecificCourses());
  }, [dispatch]);

  const [enrolledStudents, setEnrolledStudents] = useState([]);

  return (
    <div className="container text-center">
      {spcfcourses.map(spcfcourse => (

          <div className="row col-10 m-auto d-flex shadow rounded overflow-hidden bg-light my-5" key={spcfcourse._id}>
            <div className="col-md-3 text-center bg-info text-light py-4">
              <i className="display-1 bi-journal-bookmark-fill"></i>
              <h5 className="semi-bold-600 pb-4 light-300">{spcfcourse.course_name}</h5>
            </div>
            <div className="col-md-6 d-flex align-items-center pl-5 pt-lg-0 pt-4 text-start">
              <ul className="text-left px-4 list-unstyled mb-0 light-300">
                <li><i className="bi-circle-fill me-2"></i>{spcfcourse.course_outline}</li>
                <li><i className="bi-circle-fill me-2"></i>Total Units: {spcfcourse.total_units}</li>
                <li><i className="bi-circle-fill me-2"></i>Students: {spcfcourse.total_students}</li>
              </ul>
            </div>
            <div className="col-md-3 text-end pt-3 d-flex align-items-center">
              <div className="w-100 light-300 d-flex d-md-block justify-content-between">
                <p><button type="button" className="btn rounded-pill px-4 btn-outline-primary mb-3" data-bs-toggle="modal" data-bs-target="#updateModal" 
                onClick={async () => {
                  try{
                    const courseId = spcfcourse._id;
                    // console.log(`Course Id is ${courseId}`);
                    const studentsResponse = await axios.get(`api/student/by-course/${courseId}`);

                    //////////////   IMP ////////////////////
                    
// The error message you're encountering (TypeError: enrolledStudents.map is not a function) typically indicates that you're trying to use the .map() function on a variable (enrolledStudents) that is not an array.

// In your code, it seems like you're initially initializing enrolledStudents as an empty array:

// javascript
// Copy code
// const [enrolledStudents, setEnrolledStudents] = useState([]);
// However, in the onClick handler for the "Enrolled Students" button, you're fetching data using axios and then directly assigning the response to enrolledStudents:

// javascript
// Copy code
// const students = await axios.get(`api/student/by-course/${courseId}`);
// setEnrolledStudents(students);
// The issue here is that students is not just an array of data; it's actually an axios response object that includes various properties like data, status, etc.

// To fix this, you need to specifically extract the data property from the axios response and assign it to enrolledStudents:

// javascript
// Copy code
// const studentsResponse = await axios.get(`api/student/by-course/${courseId}`);
// const students = studentsResponse.data; // Extract the data property
// setEnrolledStudents(students);
// By extracting the data property from the response, you ensure that you're working with the actual array of students returned by the server.

// Update your onClick handler as shown above to properly set enrolledStudents as an array, and the error should be resolved.


                    const students = studentsResponse.data;
                    setEnrolledStudents(students);
                    // console.log(enrolledStudents);
                  } catch(error){
                    console.log(`sorry yha error hai and error is : ${error}`);
                  }
                }}
                >Enrolled Students</button></p>  
              </div>
            </div>
          </div>

        ))}

      <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">

           <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">Enrolled Students</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <ul>
        {enrolledStudents?.map((student) => (
          <li key={student._id}>{student.stud_name}</li>
        ))}
      </ul>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
        </div>
      </div>

    </div>
  )
}

export default TeacherCourseProfile
