const connection = require("../../config/db.js");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

var storage = multer.diskStorage({
  // destination: path.join(__dirname, '../../../nba-express-fontend/', 'upload'),
  destination: path.join(
    __dirname,
    `${process.env.EXPRESS_FIND_FOLDER_FROUNTEND}`,
    `${process.env.EXPRESS_FIND_SAVE_IMAGE_FROUNTEND}`, 'upload'
  ),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
    // console.log(Date.now())
  },
});

module.exports = postMember = (req, res) => {
  try {
    // 'avatar' is the name of our file input field in the HTML form
    // upload.fields([{ name: 'cardImg', maxCount: 10 }, { name: 'bookBankImg', maxCount: 10 }])
    let upload = multer({ storage: storage }).fields([
      { name: "cardImg", maxCount: 10 },
      { name: "bookBankImg", maxCount: 10 },
    ]);
    //    let upload2 = multer({ storage2: storage2}).single('bookBankImg');
    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields
      if (!req.files) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

      const classifiedsadd = {
        bookBankImg: req.files.bookBankImg[0].filename,
        cardImg: req.files.cardImg[0].filename,
        userId: req.body.userId,
        password: req.body.password,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        tel: req.body.tel,
        bookname: req.body.bookname,
        booknumber: req.body.booknumber,
        role: req.body.role,
        address: req.body.address,
        subdistrict: req.body.subdistrict,
        district: req.body.district,
        province: req.body.province,
        map: req.body.map,
        status: req.body.status,
        level: req.body.level,
        // เพิ่มอื่นถ้าจะส่งไป ที่นี้
      };
      const sql = "INSERT INTO member SET ?";
      connection.query(sql, classifiedsadd, (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
};
