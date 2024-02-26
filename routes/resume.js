const express = require('express')
const Resume = require('../models/resume')
const verifyToken = require('../middlewares/auth'); 
const upload = require('../controllers/multerSettings')
const router = express.Router();

router.get("/",async (req,res)=>{
    const resume = await Resume.findOne().sort("-createdAt");
    res.status(200).json(resume);
})
router.post("/",upload.single('resume'),async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    const filePath = req.file.path.slice(7,);    //to remove the public from the path
    if(!filePath){
        return res.status(400).send("Give atleast one thing man");
    }   
    const data = await Resume.create({
        resume:filePath,
    })
    return res.status(200).json(data);
})
module.exports = router;