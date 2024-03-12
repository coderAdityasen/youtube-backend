import { User } from "../models/User.Models.js";
import { apierror } from "../utils/apierror.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async(req, _, next) => {
  try {
      const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
      
      // console.log(token);
      if (!token) {
          throw new apierror(401, "Unauthorized request")
      }
  
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  
      const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
  
      if (!user) {
          
          throw new apierror(401, "Invalid Access Token")
      }
  
      req.user = user;
      next()
  } catch (error) {
      throw new apierror(401, error?.message || "Invalid access token")
  }
  
})

