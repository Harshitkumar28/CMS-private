import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
	stud_name: {
		type: String,
		required: true
	},
	stud_email: {
		type: String,
		required: true,
		unique: true
	},

	// done by me :- password :- hashPassword
	hashPassword: {
		type: String,
		required: true
	},

	// below added by me
	user_type: {
		type: String,
		required: true
	},


	stud_mobile: {
		type: Number,
		required: true
	},
	stud_address: {
		type: String,
		required: true
	},
	stud_pic: {
		type: String,
		required: false
	},
	course: [{
		// type: Array,
		// required: true

		// by me
		type: mongoose.Schema.Types.ObjectId,
		ref:'Course'
	}],
	exam: {
		type: Array,
		required: true
	},
	active: {
		type: Boolean,
		required: true,
		default: 1
	},
	cKey: {
		type: Boolean,
		required: true,
		default: 1
	}
}, {
	timestamps: true
})

const Student = mongoose.model('Student', studentSchema)
export default Student;