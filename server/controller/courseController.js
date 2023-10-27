const asyncHandler = require("express-async-handler")
const Course = require("../models/courseModel")

const createCourse = asyncHandler(async (req, res, next) => {
    const courseDetails = req.body

    const course = await Course.create(courseDetails)
    res.status(201).json({
        success: true, course
    })
})

const getCourse = asyncHandler(async (req, res, next) => {
    const { course } = req.body

    const courseDetails = await Course.find({ "title": course })
    if(!course){
        return next(new ErrorHandler("Course Not found", 404))
    }
    res.status(200).json({
        success: true, courseDetails
    })
})

module.exports = { createCourse, getCourse }