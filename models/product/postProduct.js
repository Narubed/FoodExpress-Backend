const connection = require("../../config/db.js");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const { google } = require("googleapis");

const CLIENT_ID =
  "967933639600-guqd7tg6uooqn68s0q3pmq6en4hrevqp.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const REFRESH_TOKEN =
  "1//04z83a_RSohB7CgYIARAAGAQSNwF-L9IrFRQ2a0x6OqdIDZBYgOTE2uc3w6HR7HKecudPkD8TiJZ3sYZranAss1p9Oc15MmWwzi0";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const storage = multer.diskStorage({
  // destination: path.join(__dirname, "../../../fontend-react/", "upload"),
  // destination: path.join(
  //   __dirname,
  //   // `${process.env.EXPRESS_FIND_FOLDER_FROUNTEND}`,
  //   // `${process.env.EXPRESS_FIND_SAVE_IMAGE_FROUNTEND}`
  // ),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
    console.log(Date.now());
  },
});
module.exports = postProduct = (req, res) => {
  console.log(req.file);

  try {
    // 'avatar' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage }).single("avatar");
    console.log(upload);
    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields
      console.log(req.file);

      uploadFile(req.file);
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
      // connection.query(sql, classifiedsadd, (err, results) => {
      //   if (err) throw err;
      //   res.json({ success: 1 });
      // });
    });
  } catch (err) {
    console.log(err);
  }
};
async function uploadFile(req) {
  console.log(req);
  const filePath = req.path;
  let fileMetaData = {
    // name: "e.png",
    parents: ["1ZRpuqXNlDAumdJiC7hDQgs8Oori3kXqO"],
  };
  let media = {
    // mimeType: "image/png",
    body: fs.createReadStream(filePath),
  };
  try {
    const response = await drive.files.create({
      resource: fileMetaData,
      // requestBody: {
      //   name: "cat.png",
      //   mimeType: "image/png",
      // },
      media: media,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.massage);
  }
}
