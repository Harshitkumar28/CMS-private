import express from 'express';
import { authUser, enrollCourse, getEnrolledCourses, getStudentByCourse, registerUser, unenrollCourse } from '../controllers/studentController.js';

const router = express.Router()

router.post('/login',authUser)
router.post('/register',registerUser)

// be me
router.get('/by-course/:courseId',getStudentByCourse);

// again by me
router.post('/:studentId/enroll',enrollCourse);
router.post('/:studentId/unenroll', unenrollCourse);

// again 2 by me
router.get('/:studentId/enrolled-courses', getEnrolledCourses);

export default router;