const express = require('express');
const {connectMongoDb} = require('./connection')
const aboutRouter = require("./routes/about");
const userRouter = require("./routes/user")
const contactRouter = require("./routes/contact")
const experienceRouter = require("./routes/experience")
const personalProjectRouter = require("./routes/personalProject")
const skillsRouter = require("./routes/skills")
const cors = require("cors")
const dotenv = require('dotenv');
dotenv.config()

// const router = express.Router();
const app = express();
// const {PORT} = process.env;
const PORT = process.env.PORT;

// Connections
connectMongoDb();

// Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.raw());

// Cors
app.use(cors())

app.get("/",(req,res)=>{
    console.log("we are in");
    res.send({"success":true}).status(200);
})
app.use("/about",aboutRouter);
app.use("/contact",contactRouter);
app.use("/experience",experienceRouter);
app.use("/personal-projects",personalProjectRouter);
app.use("/skills",skillsRouter);
app.use("/user",userRouter);

app.listen(PORT, ()=>console.log(`Server started at PORT: ${PORT}`));

// module.exports = app;