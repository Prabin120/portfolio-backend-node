const mongoose = require('mongoose')
const experienceSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        company:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        duration:{
            type:String,
            required:true,
        },
        workDetail:{
            type:Array,
            required:true
        }
    },
    {timestamps:true}
)
const Experience = mongoose.model("experience",experienceSchema);
module.exports = Experience;