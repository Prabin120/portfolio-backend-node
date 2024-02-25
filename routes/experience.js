const express = require("express");
const Experience = require('../models/experience')
const verifyToken = require('../middlewares/auth')
const router = express.Router();

router.get("/",async (req,res)=>{
    const experience = await Experience.find().sort("-createdAt");  
    res.status(200).json(experience);
})

router.post("/",async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    // console.log(req.body);
    const {title,company,location,duration,workDetail} = req.body;
    if(!(title && company && location && duration && workDetail)){
        return res.status(400).send("Give atleast one thing man");
    }
    const data = await Experience.create({
        title:title,
        company:company,
        location:location,
        duration:duration,
        workDetail:workDetail
    })
    return res.status(200).json(data);  
})
router.patch("/:title",async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    const title = req.params.title;
    const {workDetail,duration} = req.body;
    const data = await Experience.findOne({title:title});
    if(!data){
        return res.status(400).send("Invalid request");
    }
    if(workDetail) data.workDetail = workDetail;
    if(duration) data.duration = duration
    return res.status(200).json(data);          
})
module.exports = router;