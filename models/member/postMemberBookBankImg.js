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

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
    console.log(Date.now());
  },
});
module.exports = postMember.CardImg = (req, res) => {
  console.log(req);
  try {
    let upload = multer({ storage: storage }).single("bookBankImg");
    upload(req, res, function (err) {
      if (!req.file) {
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
  console.log(req.body);
  const filePath = req.file.path;
  let fileMetaData = {
    name: req.file.originalname,
    parents: ["1ZRpuqXNlDAumdJiC7hDQgs8Oori3kXqO"],
  };
  let media = {
    body: fs.createReadStream(filePath),
  };
  try {
    const response = await drive.files.create({
      resource: fileMetaData,
      media: media,
    });
    generatePublicUrl(response.data.id);
    const classifiedsadd = {
      bookBankImg: response.data.id,
      // cardImg: req.files.cardImg.filename,
      cardImg: req.body.cardImg,
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
  } catch (error) {
    console.log(error.massage);
  }
}

async function generatePublicUrl(res) {
  console.log(res);
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
