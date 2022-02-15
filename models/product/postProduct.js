const connection = require("../../config/db.js");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  // destination: path.join(__dirname, '../../../fontend-react/', 'upload'),
  destination: path.join(
    __dirname,
    `${process.env.EXPRESS_FIND_FOLDER_FROUNTEND}`,
    `${process.env.EXPRESS_FIND_SAVE_IMAGE_FROUNTEND}`
  ),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
    console.log(Date.now());
  },
});
module.exports = postProduct = (req, res) => {
  console.log(req);
  try {
    // 'avatar' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage }).single("avatar");
    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields
      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      const classifiedsadd = {
        productImg: req.file.filename,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productCost: req.body.productCost,
        productStetus: req.body.productStetus,
        typeid: req.body.typeid,
        unitkg: req.body.unitkg,
        currency: req.body.currency,
        // เพิ่มอื่นถ้าจะส่งไป ที่นี้
      };
      const sql = "INSERT INTO product SET ?";
      connection.query(sql, classifiedsadd, (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
};
