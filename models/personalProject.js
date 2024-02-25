const mongoose = require('mongoose');

const personalProjectSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        overview:{
            type:String,
        },
        duration:{
            type:String,
        },
        workDetail:{
            type:Array,
            required:true
        },
        projectLink:{
            type:String,
        }
    },
    {timestamps:true}
)

const PersonalProject = mongoose.model("personalProject",personalProjectSchema);
module.exports = PersonalProject;