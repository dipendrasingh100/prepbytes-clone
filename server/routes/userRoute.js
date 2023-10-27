const { register, login, resetpassword, createNewPassword, getUserDetails } = require("../controller/userController")
const verifyToken = require("../middleware/tokenVarification")

const userRouter = require("express").Router()

userRouter.post("/register", register)
userRouter.post("/login", login)

userRouter.post("/forgot_password", resetpassword)

userRouter.put("/password/reset/:token", createNewPassword)

userRouter.get('/me', verifyToken, getUserDetails)

module.exports = userRouter