import { Router } from "express";
import {  registerUser,
	loginUser,
	logOutUser,
	refreshAccessToken,
	changeCurrrentPassword,
	getCurrUser,
	updateAccountDetail,
	upadteAvatar,
	updateCoverImage,  } from "../controllers/User.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route("/register").post(
	upload.fields([
		{
			name : "avatar",
			maxCount : 1
		},
		{
			name : "coverImage",
			maxCount : 1
		}
	]),
	registerUser)


router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT , logOutUser)

router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrrentPassword)
router.route("/current-user").get(verifyJWT, getCurrUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetail)

router.route("/avatar").patch(verifyJWT, upload.single("avatar"), upadteAvatar)
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateCoverImage)

export default router