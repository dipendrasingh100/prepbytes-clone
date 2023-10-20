const { Schema, model } = require("mongoose")
const validator = require('validator');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide the user name"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide the user email"],
        validate: [validator.isEmail, "Please Enter a valid email"]
    },
    mobile: {
        type: Number,
        maxLength: [10, "Mobile number should be of 10 digits"],
        minLength: [10, "Mobile number should be of 10 digits"],
        required: [true, "Please provide the user mobile number"]
    },
    password: {
        type: String,
        required: [true, "please enter a valid password"],
        minLength: [8, "Password should be be greater than 8 characters"]
    },
    college: {
        type: String,
        required: [true, "College Name is Required"]
    },
    passing_year: {
        type: Number,
        required: [true, "Passing Year is Required"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = model("User", userSchema)