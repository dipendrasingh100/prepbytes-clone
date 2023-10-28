const { addProject, getProject } = require("../controller/projectController")

const projectRouter = require("express").Router()

projectRouter.post("/add", addProject)
projectRouter.get("/get", getProject)

module.exports = projectRouter