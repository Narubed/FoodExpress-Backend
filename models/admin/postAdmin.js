const connection = require("../../config/db.js");
module.exports = postAdmin = (req, res) => {
  const classifiedsadd = {
    admin_id_login: req.body.rider_id_login,
    admin_pw_login: req.body.rider_pw_login,
    admin_first_name: req.body.rider_tel,
    admin_last_name: req.body.rider_first_name,
  };
  const sql = "INSERT INTO admin_foodexpress SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
