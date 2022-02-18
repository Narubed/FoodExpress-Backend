const connection = require("../../config/db.js");
module.exports = portDeliveryInProvice = (req, res) => {
  console.log(req.body);
  const classifiedsadd = {
    member_delivery_id: req.body.member_delivery_id,
    member_delivery_member_id: req.body.member_delivery_member_id,
    member_delivery_status: req.body.member_delivery_status,
    member_delivery_province: req.body.member_delivery_province,
    member_delivery_level: req.body.member_delivery_level,
    receiver_delivery_member_id: req.body.receiver_delivery_member_id,
  };
  const sql = "INSERT INTO report_delivery_in_province SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
