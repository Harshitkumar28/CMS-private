import asyncHandler from 'express-async-handler';
import Student from '../models/studentModel.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'
import Course from '../models/courseModel.js';


//@desc Auth user & get token
//@route POST  /api/student/login
//@access Public
const authUser = asyncHandler(async(req,res) => {
	const { stud_email, password } = req.body
	const user = await Student.findOne({stud_email})

	if(user) {
		const { hashPassword } = user
		const verified = bcrypt.compareSync(password, hashPassword);
		if(verified) {
			res.status(201).json({
				_id: user._id,
				stud_name: user.stud_name,
				stud_email: user.stud_email,
				user_type: user.user_type,
				stud_mobile: user.stud_mobile,
				stud_address: user.stud_address,
				stud_pic: user.stud_pic,
				token: generateToken(user._id)
			})
		}
		else {
			res.status(400)
			throw new Error('Incorrect password')
		}
	}
	else {
		res.status(404)
		throw new Error('User not found')
	}
})

//@desc Register a new student
//@route POST  /api/student/register
//@access Public
const registerUser = asyncHandler(async(req,res) => {
	const { stud_name, 
			stud_email,
			password,
			stud_mobile,
			stud_address,
			stud_pic
			} = req.body

	const userExits = await Student.findOne({stud_email})

	if(userExits) {
		res.status(400)
		throw new Error('Student already exits')
	}

	const salt = bcrypt.genSaltSync(10);
	const hashPassword = bcrypt.hashSync(password, salt);
	const user_type = "student"

	const user = await Student.create({
		stud_name,
		stud_email,
		hashPassword,
		user_type,
		stud_mobile,
		stud_address,
		stud_pic
	})

	if(user) {
		res.status(201).json({
			// _id: user._id,
			// stud_name: user.tchr_name,
			// tchr_email: user.tchr_email,
			// user_type: user.user_type,
			// tchr_mobile: user.tchr_mobile,
			// tchr_address: user.tchr_address,
			// tchr_pic: user.tchr_pic,
			// token: generateToken(user._id)

            _id: user._id,
				stud_name: user.stud_name,
				stud_email: user.stud_email,
				user_type: user.user_type,
				stud_mobile: user.stud_mobile,
				stud_address: user.stud_address,
				stud_pic: user.stud_pic,
				token: generateToken(user._id)
		})
	}
	else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})


// by me also bcoz upr waala bhi by me
const getStudentByCourse = asyncHandler(async (req,res) => {
	try{
		const courseId = req.params.courseId;
		const students = await Student.find({course:courseId});
		res.json(students);
	} catch(error){
		res.status(500).json({message:error.message});
	}
})

// Enroll in a course 
const enrollCourse = async (req,res) => {
	const {courseId} = req.body;
	
	// const studentId = req.user._id; // Assuming I have authentication middleware that attaches the student ID to req.user
	const studentId = req.params.studentId;
	console.log(`IN Enroll file:- courseId:- ${courseId} and studentId:- ${studentId}`)
	try{
		// Fetch the student and the course
		const student = await Student.findById(studentId);
		const course = await Course.findById(courseId);

		if(!student || !course)
		{
			return res.status(404).json({
				message:'Student or Course not Found'
			})
		}

		// Check if student is already enrolled
		if(student.course.includes(courseId)){
			return res.status(400).json({
				message:'Student is already enrolled in this course'
			})
		}

		// Enroll the student in the course
		student.course.push(courseId);
		await student.save();

		// // update the student attribute of course // by me
		// course.student.push(studentId);
		// await course.save(); 

		// Increment total_students in the course
		course.total_students += 1;
		await course.save();

		res.status(200).json({
			message:'Enrolled successfully'
		})
	} catch(error) {
		res.status(500).json({
			message:"Enroll file mein error"
		})
	}
};

// UNenroll the course
const unenrollCourse = async(req,res) => {
	const {courseId} = req.body;
	// const studentId = req.user._id; // Assuming I have authentication middleware that attaches the student Id to req.user
	const studentId = req.params.studentId;

	try {
		// Fetch the student and the course
		const student = await Student.findById(studentId);
		const course = await Course.findById(courseId);

		if(!student || !course){
			return res.status(404).json({
				message:'Student or Course not Found'
			})
		}

		// check if student is enrolled or not
		if(!student.course.includes(courseId)) {
			return res.status(400).json({
				message: 'Student is not enrolled in this course'
			});
		}

		// if everything is right then unenroll the student from the course
		student.course.pull(courseId);
		await student.save();

		// // update means lessen the student attribute from course // by me
		// course.student.pull(studentId);
		// await course.save();

		// Decrement total_students in the course
		course.total_students -= 1;
		await course.save();

		res.status(200).json({
			message:'Unenrolled successfully'
		})
	} catch(error){
		res.status(500).json({
			message: error.message
		})
	}
}

// again i Harshit Kumar came for this implementatation

// Fetch enrolled courses for a specific student
const getEnrolledCourses = asyncHandler(async (req,res) => {
	const studentId = req.params.studentId;
	// console.log('gfdjksjfkdv odsjiodsmv vdovndiomvodnv dkovndkomvkdvmkdv dviodnovmdovmdovm donvkodvkdvdkok vdovm', studentId);

	try {
		const student = await Student.findById(studentId);
		if(!student) {
			return res.status(404).json({
				message: 'Student not found'
			})
		}

		// Fetch the enrolled courses
		const enrolledCourses = await Course.find({
			_id: {$in: student.course}
		});

		res.status(200).json(enrolledCourses);
		console.log(enrolledCourses);

	} catch (error) {
		res.status(500).json({
			// message:error.message
			message: `Error in enrolled course wala function ${error.message}`
		})
	}
})

export { authUser, registerUser, getStudentByCourse , enrollCourse, unenrollCourse, getEnrolledCourses};
