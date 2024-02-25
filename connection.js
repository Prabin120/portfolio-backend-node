const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

async function connectMongoDb(){
    return mongoose.connect(process.env.MONGO_URI,
    // {
    //     bufferCommands: false, // Disable Mongoose buffering
    //     bufferMaxEntries: 0, // Disable Mongoose buffering
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     serverSelectionTimeoutMS: 10000, // Timeout for server selection
    //     socketTimeoutMS: 45000, // Timeout for socket connections
    // }
    )
    .then(console.log("MongoDB connected"))
    .catch((err)=>{console.log("Error in MongoDB",err)});
}

module.exports = {connectMongoDb};