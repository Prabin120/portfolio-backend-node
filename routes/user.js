const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config();

// Register
// router.post("/register", async(req, res) => {
//     try{
//         const {name,email,password} = req.body;
//         // console.log(req.body);
//         if (!(email && password && name)){
//             res.status(400).send("All input is required");
//         }
//         const oldUser = await User.findOne({email});
//         if(oldUser){
//             return res.status(409).send("User is already exists");
//         }
//         encryptedUserPassword = await bcrypt.hash(password,10);

//         const user = await User.create({
//             name : name,
//             email : email.toLowerCase(),
//             password : encryptedUserPassword,
//         });

//         const token = jwt.sign(
//             {user_id : user._id,email},
//             process.env.TOKEN_KEY,
//             {
//                 expiresIn:"30days"
//             }
//         );
//         user.token = token;
//         return res.status(200).json(user);
//     }
//     catch(err){
//         return res.status(400).send("Error: "+err)
//     }
// }); 

// Login
router.post("/login", async(req, res) => {
    try{
        const {email,password} = req.body;
        if(!(email && password)){
            res.status(400).send("All inputs are required");
        }
        const user = await User.findOne({email});
        if(user && (await bcrypt.compare(password,user.password))){
            const token = jwt.sign(
                {user_id:user._id,email},
                process.env.TOKEN_KEY,
                {
                    expiresIn:"30days"
                }
            );
            user.token = token;

            return res.status(200).json(user);
        }
        return res.status(400).send("Invalid Credentials");
    }
    catch(err){
        return res.status(400).send("Invalid request: "+err)
    }
});
module.exports = router;