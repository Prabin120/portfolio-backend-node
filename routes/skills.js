const express = require("express");
const Skills = require('../models/skills')
const verifyToken = require('../middlewares/auth'); 
const router = express.Router();
const upload = require('../controllers/multipartySettings')


router.get("/",async (req,res)=>{
    const skillDetail = await Skills.find();
    res.status(200).json(skillDetail);
})
router.get("/group",async(req,res)=>{
    const skills = {}
    const language =await  Skills.find({skillType:"Programming Languages"})
    const framework = await Skills.find({skillType:"Frameworks"})
    const database =await  Skills.find({skillType:"Database"})
    const softSkills =await  Skills.find({skillType:"Soft Skills"})
    skills["Programming Language"] = language
    skills["Frameworks"] = framework
    skills["Database"] = database
    skills["Soft Skills"] = softSkills

    return res.status(200).json(skills)
})
router.get("/:name",async (req,res)=>{
    const language = req.params.name;
    const skillDetail = await Skills.findOne({language});
    res.status(200).json(skillDetail);  
})

router.post("/",upload.single('icon'),async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    const {skillType,name,percentage} = req.body;
    const filePath = req.file.path.slice(7,);    //to remove the public from the path
    if(!(skillType && name && filePath && percentage)){
        return res.status(400).send("Give atleast one thing man");
    }   
    const data = await Skills.create({
        skillType:skillType,
        name:name,
        icon:filePath,                  
        percentage:percentage
    })
    return res.status(200).json(data);
})
router.patch("/:name",async(req,res)=>{
    if(!verifyToken(req,res)){
        return res.status(403).send("Don't be foolish only I can update the things.")
    }
    const {percentage} = req.body;
    if(!percentage) return res.status(400).send("Hi Hi He, give percentage.");
    const skill = req.params.name;
    const data = await Skills.findOne({language:skill});
    data.percentage = percentage;   
    return res.status(200).json(data);
})
module.exports = router;