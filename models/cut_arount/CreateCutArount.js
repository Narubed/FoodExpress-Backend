const connection = require("../../config/db.js");
module.exports = CreateCutArount = (req, res) => {
  console.log(req.body);
  const classifiedsadd = {
    cut_arount_id: req.body.cut_arount_id,
    cut_arount_province: req.body.cut_arount_province,
    // cut_arount_member_id : req.body.cut_arount_member_id,
    cut_arount_status: req.body.cut_arount_status,
    // cut_arount_address : req.body.cut_arount_address,
    cut_arount_first_date: req.body.cut_arount_first_date,
    cut_arount_last_date: req.body.cut_arount_last_date,
  };
  const sql = "INSERT INTO cut_around_order_foodexpress SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
