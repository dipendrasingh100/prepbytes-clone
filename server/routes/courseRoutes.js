const { createCourse, getCourse } = require("../controller/courseController")

const courseRouter = require("express").Router()


courseRouter.post("/add", createCourse)
courseRouter.get("/getcourse", getCourse)

module.exports = courseRouter