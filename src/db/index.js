import mongoose from "mongoose";
import {DB_NAME} from "../contants.js"

const connectToDb = async ()=>{
	try {
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
		console.log(`mongodb connected !! DB host : ${connectionInstance.connection.host}`)
	} catch (error) {
		console.log("error" , error)
		process.exit(1)
	}
}
export default connectToDb

