const dbCon = require("../../config/db.js");
module.exports = loginAdmin = (req, res) => {
  let admin_id_login = req.body.setUserNames;
  let admin_pw_login = req.body.setPasswords;
  console.log("rider_id_login=", admin_id_login);
  console.log(admin_pw_login + "*******");

  // validation
  if (!admin_id_login || !admin_pw_login) {
    console.log("if แรก");
    return res.status(400).send({
      error: true,
      message: "ไม่มีค่าไอดี หรือ พาส .",
    });
  } else {
    dbCon.query(
      "SELECT * FROM admin_foodexpress WHERE admin_id_login = ? and admin_pw_login = ?",
      [admin_id_login, admin_pw_login],
      (error, results, fields) => {
        // if (error) throw error;

        let message = "";
        let accessToken = "";
        if (results === undefined || results.length == 0) {
          message = "error";
          return res.send({ message: message });
        } else {
          message = "success";
          accessToken = "NBA";
          return res.send({
            error: false,
            data: results[0],
            message: message,
            accessToken: accessToken,
          });
        }
      }
    );
  }
};
