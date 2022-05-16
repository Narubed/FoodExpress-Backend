const dbCon = require("../../config/db.js");
module.exports = postMember = (req, res) => {
  let userId = req.body.setUserNames;
  let password = req.body.setPasswords;

  // validation
  if (!userId || !password) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt member Sumone.",
    });
  } else {
    console.log(password + "*******");
    dbCon.query(
      "SELECT * FROM member WHERE userId = ? and password = ?",
      [userId, password],
      (error, results, fields) => {
        // if (error) throw error;
        console.log("dbconnec = " + results);

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
