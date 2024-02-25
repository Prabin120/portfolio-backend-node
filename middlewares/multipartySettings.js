const multiparty = require("multiparty")
const multer = require('multer');
const fs = require('fs/promises'); // Use promises for asynchronous operations
const path = require('path');

// const IMAGE_UPLOAD_DIR = "./public/images/"
// const form  = new multiparty.Form({uploadDir:IMAGE_UPLOAD_DIR})

// module.exports = form;

const upload = multer({
    storage: multer.diskStorage({
    //   destination: async (req, file, cb) => {
        // const uploadDir = path.join('./public/images/'); // Adjust upload directory as neededs
        // await fs.mkdir(uploadDir, { recursive: true }); // Create directory if it doesn't exist
    //     cb(null, uploadDir);
    //   },
        destination: "./public/images/",
      filename: (req, file, cb) => {
        const uniqueFilename = Date.now() + '-' + file.originalname.replace(/\s+/g, '-');
        cb(null, uniqueFilename);
      }
    })
  });

  module.exports = upload;