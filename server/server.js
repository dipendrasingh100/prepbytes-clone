require("dotenv").config()
const express = require("express")
const connectDatabase = require("./db/connection")

const cors = require("cors")
const userRouter = require("./routes/userRoute")
const errorMiddleware = require("./middleware/error")
const mockRouter = require("./routes/mockRoutes")
const orderRouter = require("./routes/orderRoutes")
const courseRouter = require("./routes/courseRoutes")
const projectRouter = require("./routes/projectRoutes")
const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))

const PORT = process.env.PORT || 8000
const startDB = async () => {
    try {
        await connectDatabase()
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        })
    }
    catch (err) {
        console.log(err);
    }
}

startDB()

app.use("/api/auth", userRouter)
app.use("/api/mock", mockRouter)
app.use("/api/v2", orderRouter)
app.use("/api/course", courseRouter)
app.use("/api/project", projectRouter)

app.use(errorMiddleware)