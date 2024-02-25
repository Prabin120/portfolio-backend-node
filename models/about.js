const mongoose = require('mongoose')
const aboutSchema = new mongoose.Schema(
    {
        intro: {
            type:String,
            required :true
        },
        img: {
            type:String,
            required :true
        }
    },
    {timestamps:true}
)

const About = mongoose.model("about",aboutSchema);
module.exports = About;