const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const ErrorHandler = require("../utils/errorHandler")
const generateToken = require("../utils/generateToken")

//POST: /api/auth/register - Register user
const register = asyncHandler(async (req, res, next) => {
    const { name, email, mobile, password, college, passing_year } = req.body

    //check if email already registered
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        return next(new ErrorHandler("Email is already registered, please Login", 409))
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    const user = await User.create({ name, email, mobile, password: hashPassword, college, passing_year })
    user.password = undefined
    const token = generateToken(user._id)
    res.status(201).json({
        success: true,
        token,
        user
    })
})

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return next(new ErrorHandler('Invalid Credentials', 401));
    }

    const checkPass = bcrypt.compareSync(password, user.password)
    if (!checkPass) {
        return next(new ErrorHandler('Invalid Password', 401));
    }
    const token = generateToken(user._id)
    user.password = undefined
    res.status(201).json({
        success: true,
        token,
        user
    })

})

//POST: /api/auth/forgot_password - Forgot password
const resetpassword = asyncHandler(async (req, res, next) => {
    const { email } = req.body

    const user = await User.findOne({ "email": email })
    if (!user) {
        return next(new ErrorHandler(`No account associated with ${email}`, 404));
    }

    //Get reset password token
    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false })

    const message = `To reset your password click the link below:\n\n ${process.env.FRONTEND_URL}/password/reset/${resetToken} \n\nIf you have not requested this email then, please ignore it.`


    try {
        await sendEmail({
            email,
            subject: 'Reset Password - CARTFORUS',
            message
        })
        res.status(200).json({ success: true, message: `Email sent to ${email} successfully` })

    } catch (err) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save()

        return next(new ErrorHandler(err.message), 500)
    }
})


//PUT: /api/auth//password/reset/:token - Password reset
const createNewPassword = asyncHandler(async (req, res, next) => {
    const { token } = req.params
    const { password, confirmPassword } = req.body

    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex")

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler("Link Expired", 403))
    }

    if (password !== confirmPassword) {
        return next(new ErrorHandler("Password doesn't match"), 500)
    }

    user.password = await bcrypt.hash(password, 10)
    user.resetPasswordExpire = undefined
    user.resetPasswordToken = undefined

    await user.save()
    sendToken(user, 200, res)

})

module.exports = { register, login, resetpassword, createNewPassword }