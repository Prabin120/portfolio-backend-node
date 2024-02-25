const express = require("express");
const {SocialLink,ContactForm } = require('../models/contact')
const router = express.Router();

router.get("/social-link/:name",async (req,res)=>{
    const name = req.params.name;
    const link = await SocialLink.findOne({name});
    res.status(200).json(link);
})

router.post("/",async(req,res)=>{
    const {name,email,message} = req.body;
    if(!(name && email && message)){
        return res.status(400).send("You have to fill all the data.");
    }
    const data = await ContactForm.create({
        name:name,
        email:email,
        message:message
    })
    return res.status(200).send("Thank you for the message");
})
module.exports = router;