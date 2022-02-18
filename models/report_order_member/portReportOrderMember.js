const connection = require("../../config/db.js");
module.exports = portReportOrderMember = (req, res) => {
  console.log(req.body);
  const classifiedsadd = {
    report_order_id: req.body.report_order_id,
    id_order_rider_id: req.body.id_order_rider_id,
    report_order_member_userid: req.body.report_order_member_userid,
    report_order_product_id: req.body.report_order_product_id,
    report_order_product_name: req.body.report_order_product_name,
    report_order_product_amount_in: req.body.report_order_product_amount_in,
    report_order_product_amount_out: req.body.report_order_product_amount_out,
    report_order_status: req.body.report_order_status,
  };
  const sql = "INSERT INTO report_order_member SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
