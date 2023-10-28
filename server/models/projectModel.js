const { Schema, model } = require("mongoose")

const projectSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide the project name"]
    },
    topics: {
        type: [String]
    },
    projects: [
        {
            title: { type: String },
            thumb: { type: String },
            link: { type: String },
            description: { type: String }
        }
    ]
})

module.exports = model("Project", projectSchema)