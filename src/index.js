import connectToDb from "./db/index.js";
import dotenv from "dotenv"
import {app} from "./app.js"
dotenv.config({
	path: './env'
})

connectToDb()
.then(()=>{
	app.listen(process.env.PORT || 8000 , ()=>{
		console.log(`server is running at http://localhost:${process.env.PORT}`);
	})
})
.catch((err)=>{
	console.log(err)
})
