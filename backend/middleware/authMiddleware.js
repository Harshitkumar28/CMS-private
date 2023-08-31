import jwt from 'jsonwebtoken'
import Teacher from '../models/teacherModel.js'
import asyncHandler from 'express-async-handler';
import Student from '../models/studentModel.js';

export const protectTeacher = asyncHandler(async(req,res,next) => {
	//console.log(req.headers.authorization)
	let token
	if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
	{
		console.log('token found')
		try {
			token = req.headers.authorization.split(' ')[1]
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			//console.log(decoded)
			req.user = await Teacher.findById(decoded.id).select('-password')
			next()
		}
		catch (error) {
			console.error(error)
			res.status(401)
			throw new Error('Not authorized token failed')
		}
	}

	else
	{
		res.status(401)
		throw new Error('Not authorized, no token')
	}
})


// no use for now
export const protectStudent = asyncHandler(async(req,res,next) => {
	let token;
	if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
	{
		try{
			token = req.headers.authorization.split(' ')[1];
		    const decoded = jwt.verify(token,process.env.JWT_SECRET);
		    req.user = await Student.findById(decoded.id).select('-password')
		    next();
			
		} catch(error) {
			console.log(error)
			res.status(401)
			throw new Error('Not authorized token failed')
		}
	}
	else {
		res.status(401)
		throw new Error('Not authorized, no token')
	}
})

