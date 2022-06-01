const connection = require("../../config/db.js");
module.exports = postPercentOrderDetail = (req, res) => {
  console.log("POST Percent ", req.body);
  const classifiedsadd = {
    percent_order_id: req.body.percent_order_id,
    percent_order_detail_id: req.body.percent_order_detail_id,
    percent_order_member_id: req.body.percent_order_member_id,
    percent_level_name: req.body.percent_level_name,
    percent_subdistrict: req.body.percent_subdistrict,
    percent_district: req.body.percent_district,
    percent_provice: req.body.percent_provice,
    percentage_increase: req.body.percentage_increase,
    percentage_increase_income: req.body.percentage_increase_income,
    percent_value_takeoff_vat: req.body.percent_value_takeoff_vat,
    percent_value_vat: req.body.percent_value_vat,
    percent_value_PF_VAT: req.body.percent_value_PF_VAT,
    percent_value_PF_HO: req.body.percent_value_PF_HO,
    percent_older_price_value: req.body.percent_older_price_value,
    percent_older_cost_value: req.body.percent_older_cost_value,
    percent_service_value_subdistrict:
      req.body.percent_service_value_subdistrict,
    percent_service_value_district: req.body.percent_service_value_district,
    percent_service_value_provice: req.body.percent_service_value_provice,
  };
  const sql = "INSERT INTO percent_order_detail SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
