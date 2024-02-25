const express = require("express");
const About = require('../models/about')
const verifyToken = require('../middlewares/auth')
const router = express.Router();
const multipartyForm = require('../controllers/multipartySettings')


router.get("/",async (req,res)=>{
    const about = await About.findOne().sort("-createdAt");   
    res.status(200).json(about);
})

router.post("/",async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    const form = multipartyForm;
    form.parse(req,async (err,fields,files)=>{
        if(err) return res.status(400).send({error:err.message});
        const {intro} = fields;
        const filePath = files.img[0].path.slice(7,);
        // console.log(intro,img);
        if(!(intro || filePath)){
            return res.status(400).send("Give atleast one thing man");
        }
        const data = await About.create({
            intro: intro[0],
            img : filePath  
        })
        return res.status(200).json(data);
    });
})
module.exports = router;