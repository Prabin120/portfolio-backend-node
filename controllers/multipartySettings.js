const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
    destination: "./public/images/",
      filename: (req, file, cb) => {
        const uniqueFilename = Date.now() + '-' + file.originalname.replace(/\s+/g, '-');
        cb(null, uniqueFilename);
      }
    })
  });

  module.exports = upload;