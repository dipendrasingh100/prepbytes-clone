const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")

const register = (req, res) => {
    const { name, email, mobile, password, college, passing_year } = req.body




}

const login = (req, res) => {

}

module.exports = { register, login }