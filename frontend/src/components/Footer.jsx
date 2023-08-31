import React from 'react';
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-dark pt-4">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-3 col-12 align-left">
              <NavLink className="navbar-brand" to="/" exact>
                <i className="bi bi-buildings text-success" />

            <span className="text-secondary">C</span>
            <span className="text-primary">O</span>
            <span className="text-secondary">U</span>
            <span className="text-primary">R</span>
            <span className="text-primary">S</span>
            <span className="text-secondary">E</span>
            <span className="text-primary"><i>f</i></span>
            <span className="text-primary"><i>l</i></span>
            <span className="text-primary"><i>o</i></span>
            <span className="text-secondary"><i>w</i></span>
            <span className="text-primary">3</span>
            <span className="text-secondary">6</span>
            <span className="text-primary">0</span>
              </NavLink>
              <p className="text-light my-lg-4 my-2">
                This Project is a Course Management System where teachers can register and login and create courses and tests while a Student can enroll or unenroll in that course.
                Implemented using MERN stack technologies.
              </p>
              <ul className="list-inline footer-icons light-300">
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="http://facebook.com/">
                    <i className='bi-facebook'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                    <i className='bi-linkedin'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.github.com/">
                    <i className='bi-github'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.twitter.com/">
                    <i className='bi-twitter'></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a className="text-light" rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                    <i className='bi-instagram'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="pb-lg-3 text-light light-300">Quick Links</h3>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/courses" exact>Courses</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/tests" exact>Tests</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/teacher_login" exact>Teacher</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/student_login" exact>Student</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="pb-lg-3 text-light light-300">Latest Courses</h3>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/" exact>Machine Learning</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/" exact>Web Development</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/" exact>Big Data</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h3 className="pb-lg-3 text-light light-300">For Public</h3>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/" exact>Terms of use</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/" exact>Privacy Policy</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <NavLink className="text-decoration-none text-light" to="/contact" exact>Contact</NavLink>
                </li>
                <li className="pb-2">
                  <i className='bi-chevron-right'></i>
                  <a className="text-decoration-none text-light" href="mailto:rajharshm255@gmail.com">Developer's Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100 bg-primary py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-start text-center text-light light-300">
                  &copy; Copyright {(new Date().getFullYear())} Harshit Kumar. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-end text-center text-light light-300">
                  Designed by <a rel="noreferrer" className="text-decoration-none text-light" target="_blank"><strong>Harshit Kumar</strong></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
