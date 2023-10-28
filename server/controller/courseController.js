const asyncHandler = require("express-async-handler")
const Course = require("../models/courseModel")
const ErrorHandler = require("../utils/errorHandler")

const createCourse = asyncHandler(async (req, res, next) => {
    const courseDetails = req.body

    const course = await Course.create(courseDetails)
    res.status(201).json({
        success: true, course
    })
})

const getCourse = asyncHandler(async (req, res, next) => {
    const { c } = req.query

    const courseDetails = await Course.findOne({ "title": c })
    if(!courseDetails){
        return next(new ErrorHandler("Course Not found", 404))
    }
    res.status(200).json({
        success: true, courseDetails
    })
})

module.exports = { createCourse, getCourse }