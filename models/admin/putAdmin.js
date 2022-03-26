const connection = require("../../config/db.js");
module.exports = putAdmin = (req, res) => {
  let admin_auto_id = req.body.admin_auto_id;
  let admin_id_login = req.body.admin_id_login;
  let admin_pw_login = req.body.admin_pw_login;
  let admin_first_name = req.body.admin_first_name;
  let admin_last_name = req.body.admin_last_name;
  let admin_level = req.body.admin_level;
  // admin_level: req.body.admin_level,
  // validation
  if (!admin_auto_id || !admin_first_name) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putAdmin Sumone.",
    });
  } else {
    connection.query(
      "UPDATE admin_foodexpress SET  admin_id_login = ?, admin_pw_login = ?,admin_first_name = ?,admin_last_name = ?, admin_level=? WHERE admin_auto_id = ?",
      [
        admin_id_login,
        admin_pw_login,
        admin_first_name,
        admin_last_name,
        admin_level,
        admin_auto_id,
      ],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "putAdmin not found or data are same";
        } else {
          message = "putAdmin successfully updated";
        }

        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};
