const asyncHandler = require("express-async-handler")
const Project = require("../models/projectModel")
const ErrorHandler = require("../utils/errorHandler")

const addProject = asyncHandler(async (req, res, next) => {
    const projectdata = req.body

    const project = await Project.create(projectdata)
    res.status(201).json({
        success: true,
        project
    })
})

const getProject = asyncHandler(async (req, res, next) => {
    const pname = req.query.p

    const project = await Project.findOne({ name: pname })
    if (!project) {
        return next(new ErrorHandler("Project Not found", 404))
    }
    res.status(200).json({
        success: true,
        project
    })
})

module.exports = { addProject, getProject }