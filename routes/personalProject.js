const express = require("express");
const PersonalProject = require('../models/personalProject')
const verifyToken = require('../middlewares/auth')
const router = express.Router();

router.get("/",async (req,res)=>{
    const personalProject = await PersonalProject.find().sort("-createdAt");   
    res.status(200).json(personalProject);
})

router.post("/",async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    // console.log(req.body);
    const {title,overview,duration,workDetail,projectLink} = req.body;
    if(!(title && overview && duration && workDetail && projectLink)){
        return res.status(400).send("Give atleast one thing man");
    }
    const data = await PersonalProject.create({
        title:title,
        overview:overview,
        duration:duration,
        workDetail,workDetail,
        projectLink:projectLink
    })
    return res.status(200).json(data);
})

router.patch("/:title",async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    const title = req.params.title;
    const {workDetail,overview,projectLink,duration} = req.body;
    const data = await PersonalProject.findOne({title:title});
    if(!data){
        return res.status(400).send("Invalid request");
    }
    if(workDetail) data.workDetail = workDetail;
    if(overview) data.overview = overview
    if(projectLink) data.projectLink = projectLink
    if(duration) data.duration = duration
    return res.status(200).json(data);
})
module.exports = router;