const { Schema, model } = require("mongoose")

const mockSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide the test title"]
    },
    thumbnail: {
        type: String
    },
    category: String,
    date: String,
    participants: Number,
    duration: Number
})

module.exports = model("Mock", mockSchema)