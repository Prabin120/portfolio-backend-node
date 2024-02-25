const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        icon:{
            data:Buffer,
            contentType: String
        },
        link:{
            type:String,
            required:true,
        }
    }
)

const contactFormSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        }
    },
    {timestamps:true},
)

const SocialLink = mongoose.model("socialLink",socialLinkSchema);
const ContactForm = mongoose.model("contactForm",contactFormSchema);

module.exports = {SocialLink,ContactForm};