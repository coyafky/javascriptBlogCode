const express = require("express");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }

})

const upload = multer({ 
    storage: storage ,
    fileFilter: function (req, file, cb) {
        if(path.extname(file.originalname) !== '.pdf') {
            return cb(new Error('Only pdf files are allowed'))
        }
        cb(null, true)
    }

});

app.post('/upload', upload.single('pdf'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      res.json({ filename: req.file.filename });
  });
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });