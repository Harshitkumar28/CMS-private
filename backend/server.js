import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import teacherRoutes from './routes/teacherRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import studentRoutes from './routes/studentRoutes.js';

dotenv.config()

connectDB()

const app = express()

app.use(express.json()); //middleware

app.get('/', (req,res) => {
	res.send("Let's start!!");
});

app.use('/api/teacher', teacherRoutes)
app.use('/api/course', courseRoutes)

// by me
app.use('/api/student',studentRoutes)

const port = 8000 || process.env.PORT;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});