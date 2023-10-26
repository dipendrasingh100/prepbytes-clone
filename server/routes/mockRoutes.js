const { getAllMockTests, addNewTest } = require("../controller/mockController")

const mockRouter = require("express").Router()

mockRouter.get("/tests", getAllMockTests)
mockRouter.post("/add", addNewTest)

module.exports = mockRouter