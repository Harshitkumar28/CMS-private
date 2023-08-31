import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutTeacher } from '../actions/teacherActions';
import { logoutStudent } from '../actions/studentActions';
import { NavLink } from "react-router-dom";

function Navbar() {

  const dispatch = useDispatch()

  const teacherLogin = useSelector(state => state.teacherLogin);
  const studentLogin = useSelector(state => state.studentLogin);


  const {loading, error, teacherInfo} = teacherLogin;

   //////////////////           VVI        ///////////////////
//    No, it's not necessary for the variable names to be the same during destructuring in different files. The variable names you use during destructuring in one file don't have to match the variable names used in another file, as long as the structure of the object being destructured remains the same.

// In your example:

// javascript
// Copy code
// const { loadingI, errorI, studentInfo } = studentLogin;
// You are destructuring properties from the studentLogin object. The names loadingI, errorI, and studentInfo are being used as the variable names to store the corresponding properties from the studentLogin object.

// The key thing to remember is that the order and names of the properties in the destructuring pattern need to match the structure of the object you are destructuring. For example, if your studentLogin object looks like this:

// javascript
// Copy code
// const studentLogin = {
//   loading: true,
//   error: null,
//   studentInfo: { /* ... */ }
// };
// Then the destructuring pattern should match the property names:

// javascript
// Copy code
// const { loading, error, studentInfo } = studentLogin;


///////////// BACK TO CODE ////////////
  const { loadingI,errorI, studentInfo} = studentLogin;

  const logoutHandlerTeacher = () => {
    dispatch(logoutTeacher())
  }

  // by me
  const logoutHandlerStudent = () => {
    dispatch(logoutStudent())
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <NavLink className="navbar-brand fs-3 fw-bold" to="/" exact>
            
            <i className="bi bi-buildings text-success" />
            <span className="text-dark">C</span>
            <span className="text-primary">O</span>
            <span className="text-dark">U</span>
            <span className="text-primary">R</span>
            <span className="text-primary">S</span>
            <span className="text-dark">E</span>
            <span className="text-primary"><i>f</i></span>
            <span className="text-primary"><i>l</i></span>
            <span className="text-primary"><i>o</i></span>
            <span className="text-dark"><i>w</i></span>
            <span className="text-primary">3</span>
            <span className="text-dark">6</span>
            <span className="text-primary">0</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" exact>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses" exact>Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tests" exact>Tests</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
              </li>
            </ul>
            <div className="navbar align-self-center d-flex">
              
              {teacherInfo ? (
                <>
                  <NavLink className="nav-link text-success" to="/teacher_dashboard" exact title="Dashboard">
                    Hi, <strong>{teacherInfo.tchr_name}</strong>
                  </NavLink>
                  <NavLink className="nav-link" to="/notices" exact title="Notices">
                    <i className="bi-bell text-primary" role="img"></i>
                  </NavLink>
                  <NavLink className="nav-link" onClick={logoutHandlerTeacher} to="" title="Logout">
                    <i className="bi-box-arrow-right text-danger" role="img"></i>
                  </NavLink>
                </>
                ) : studentInfo ?(

                  <>
                  <NavLink className="nav-link text-success" to="/student_dashboard" exact title="Dashboard">
                    Hi, <strong>{studentInfo.stud_name}</strong>
                  </NavLink>
                  <NavLink className="nav-link" to="/notices" exact title="Notices">
                    <i className="bi-bell text-primary" role="img"></i>
                  </NavLink>
                  <NavLink className="nav-link" onClick={logoutHandlerStudent} to="" title="Logout">
                    <i className="bi-box-arrow-right text-danger" role="img"></i>
                  </NavLink>
                </>

                ) :(

                  <>
                    <NavLink className="nav-link" to="/notices" exact title="Notices">
                      <i className="bi-bell text-primary" role="img"></i>
                    </NavLink>
                    <NavLink className="nav-link" to="/student_login" exact title="Student">
                      <i className="bi-person-badge text-primary" role="img"></i>
                    </NavLink> 
                     <NavLink className="nav-link" to="/teacher_login" exact title="Teacher">
                      <i className="bi-person-circle text-success" role="img"></i>
                    </NavLink>
                  </>
                )}        
        
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
