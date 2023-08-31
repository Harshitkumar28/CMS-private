import mongoose from 'mongoose'
// const colors = require('colors'); // this is wrong
// sice my file is treated as ES module and not as a JS module
// because package.json has "type":"module" so use import instead as below
import colors from 'colors';
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})

		console.log(`Connected to MongoDB database: ${conn.connection.host} ` )
	}
	catch (error) {
		console.error(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDB;

// "dev": " cross-env NODE_OPTIONS=--openssl-legacy-provider && next dev",
// "build": "cross-env react-scripts build && NODE_OPTIONS=--openssl-legacy-provider && next build && next export",