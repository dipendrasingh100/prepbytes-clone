const asyncHandler = require("express-async-handler")
const Mock = require("../models/mockModel")

const getAllMockTests = asyncHandler(async (req, res, next) => {
    const tests = await Mock.find()

    res.status(200).json({
        success: true,
        tests
    })
})

const addNewTest = asyncHandler(async (req, res, next) => {
    const mockData = req.body
    await Mock.create(mockData)

    res.status(201).json({
        success:true,
        message:"Successfully created new test"
    })
})

module.exports = { getAllMockTests, addNewTest }