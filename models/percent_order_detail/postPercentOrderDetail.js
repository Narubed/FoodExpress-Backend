const connection = require("../../config/db.js");
module.exports = postPercentOrderDetail = (req, res) => {
  console.log("POST Percent ", req.body);
  const classifiedsadd = {
    percent_order_id: req.body.percent_order_id,
    percent_order_detail_id: req.body.percent_order_detail_id,
    percent_order_member_id: req.body.percent_order_member_id,
    percent_order_detail_level_name: req.body.percent_order_detail_level_name,
    percent_order_detail_subdistrict: req.body.percent_order_detail_subdistrict,
    percent_order_detail_district: req.body.percent_order_detail_district,
    percent_order_detail_provice: req.body.percent_order_detail_provice,
    percent_order_detail_nba: req.body.percent_order_detail_nba,
    percent_value_detail: req.body.percent_value_detail,
    percent_value_detail_subdistrict: req.body.percent_value_detail_subdistrict,
    percent_value_detail_district: req.body.percent_value_detail_district,
    percent_value_detail_provice: req.body.percent_value_detail_provice,
    percent_value_detail_nba: req.body.percent_value_detail_nba,
  };
  const sql = "INSERT INTO percent_order_detail SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
