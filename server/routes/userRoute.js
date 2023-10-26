const { register, login, resetpassword, createNewPassword } = require("../controller/userController")

const userRouter = require("express").Router()

userRouter.post("/register", register)
userRouter.post("/login", login)

userRouter.post("/forgot_password", resetpassword)

userRouter.put("/password/reset/:token", createNewPassword)

module.exports = userRouter