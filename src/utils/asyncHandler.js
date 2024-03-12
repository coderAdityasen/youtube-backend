const asyncHandler = (requestHandler)=>{
	return (req , resp , next) => {
		Promise.resolve(requestHandler(req , resp ,next)).catch((error)=> next(error))
	}
}

export {asyncHandler}




// const asyncHandler = (fn) =>async (req, resp , next) =>{
// 	try {
// 		await fn(req , resp , next)
// 	} catch (error) {
// 		resp.status(error.code || 500).json({
// 			success : false,
// 			message : "not conmected"
// 		})
// 	}
// }

