const mongoose = require("mongoose");

const password  = "Prabin12"

async function connectMongoDb(){
    return mongoose.connect(`mongodb+srv://prabinsharma120:${password}@cluster0.j53rakb.mongodb.net/?retryWrites=true&w=majority`,
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
// Password: Prabin12

// mongoose.connect(uri, {
//     bufferCommands: false, // Disable Mongoose buffering
//     bufferMaxEntries: 0, // Disable Mongoose buffering
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 10000, // Timeout for server selection
//     socketTimeoutMS: 45000, // Timeout for socket connections
//   });
  