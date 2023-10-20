require("dotenv").config()
const express = require("express")
const connectDatabase = require("./db/connection")

const cors = require("cors")
const userRouter = require("./routes/userRoute")

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