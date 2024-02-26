const mongoose = require('mongoose')
const resumeSchema = new mongoose.Schema(
    {
        resume:{
            type:String,
            required: true
        }
    },
    {timestamps:true}
)
const Resume = mongoose.model("resume",resumeSchema);
module.exports = Resume;