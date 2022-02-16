const connection = require("../../config/db.js");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_DRIVE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;

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

var storage = multer.diskStorage({
  // // destination: path.join(__dirname, '../../../nba-express-fontend/', 'upload'),
  // destination: path.join(
  //   __dirname,
  //   `${process.env.EXPRESS_FIND_FOLDER_FROUNTEND}`,
  //   `${process.env.EXPRESS_FIND_SAVE_IMAGE_FROUNTEND}`, 'upload'
  // ),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
    // console.log(Date.now())
  },
});

module.exports = postMember = (req, res) => {
  try {
    let upload = multer({ storage: storage }).fields([
      { name: "cardImg", maxCount: 10 },
      { name: "bookBankImg", maxCount: 10 },
    ]);
    upload(req, res, function (err) {
      if (!req.files) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      uploadFile(req, res);
    });
  } catch (err) {
    console.log(err);
  }
};
async function uploadFile(req, res) {
  const filePathbookBankImg = req.files.bookBankImg[0].path;
  const filePathcardImg = req.files.cardImg[0].path;
  let fileMetaDataBookBankImg = {
    name: req.files.bookBankImg[0].originalname,
    parents: ["1ZRpuqXNlDAumdJiC7hDQgs8Oori3kXqO"],
  };
  let fileMetaDataCardImg = {
    name: req.files.bookBankImg[0].originalname,
    parents: ["1ZRpuqXNlDAumdJiC7hDQgs8Oori3kXqO"],
  };
  let mediabookBankImg = {
    body: fs.createReadStream(filePathbookBankImg),
  };
  let mediacardImg = {
    body: fs.createReadStream(filePathcardImg),
  };
  try {
    const responseBookBankImg = await drive.files.create({
      resource: fileMetaDataBookBankImg,
      media: mediabookBankImg,
    });
    const responseCardImg = await drive.files.create({
      resource: fileMetaDataCardImg,
      media: mediacardImg,
    });
    generatePublicUrl(responseBookBankImg.data.id);
    generatePublicUrl(responseCardImg.data.id);
    const classifiedsadd = {
      bookBankImg: responseBookBankImg.data.id,
      cardImg: responseCardImg.data.id,
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
    console.log(classifiedsadd);
    const sql = "INSERT INTO member SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {
      if (err) throw err;
      res.json({ success: 1 });
    });
  } catch (error) {
    console.log(error.massage);
  }
}
async function generatePublicUrl(res) {
  try {
    const fileId = res;
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}
