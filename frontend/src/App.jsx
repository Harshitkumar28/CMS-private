import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import './App.css';
import About from "./screens/About";
import Courses from "./screens/Courses";
import Tests from "./screens/Tests";
import Contact from "./screens/Contact";
import Notices from "./screens/Notices";
import TeacherLogin from "./screens/TeacherLogin";
import TeacherRegister from "./screens/TeacherRegister";
import TeacherDash from "./screens/TeacherDash";
import TeacherCourses from "./screens/TeacherCourses";
import TeacherTests from "./screens/TeacherTests";
import AddQuestion from "./screens/AddQuestion";
import StudentLogin from "./screens/StudentLogin";
import StudentRegister from "./screens/StudentRegister";
import StudentDash from "./screens/StudentDash";
import TeacherCourseProfile from "./components/TeacherCourseProfile"
import StudentCourse from "./components/Students/StudentCourse";
import StudentTest from "./components/Students/StudentTest";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/tests" component={Tests} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/notices" component={Notices} />
          <Route exact path="/teacher_login" component={TeacherLogin} />
          <Route exact path="/teacher_register" component={TeacherRegister} />
          <Route exact path="/teacher_dashboard" component={TeacherDash} />
          <Route exact path="/teacher_courses" component={TeacherCourses} />
          <Route exact path="/teacher_tests" component={TeacherTests} />
          
          {/* done by me this  */}
          <Route exact path="/teacher_course_profile" component={TeacherCourseProfile} />

          <Route exact path="/add_question" component={AddQuestion} />
          <Route exact path="/student_login" component={StudentLogin} />
          <Route exact path="/student_register" component={StudentRegister} />
          <Route exact path="/student_dashboard" component={StudentDash} />

          {/* again by me */}
          <Route exact path = "/student_course" component={StudentCourse} />
          <Route exact path = "/student_test" component={StudentTest} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
