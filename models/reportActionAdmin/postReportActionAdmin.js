const connection = require("../../config/db.js");
module.exports = portDeliveryInProvice = (req, res) => {
  console.log(req.body);
  const classifiedsadd = {
    id_report_action_admin: req.body.id_report_action_admin,
    report_action_admin_id: req.body.report_action_admin_id,
    report_action_order_id: req.body.report_action_order_id,
    report_action_admin_value: req.body.report_action_admin_value,
    report_action_admin_date: req.body.report_action_admin_date,
  };
  const sql = "INSERT INTO report_action_admin SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
