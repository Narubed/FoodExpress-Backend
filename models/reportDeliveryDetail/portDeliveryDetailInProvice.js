const connection = require("../../config/db.js");
module.exports = portDeliveryDetailInProvice = (req, res) => {
  console.log(req.body);
  const classifiedsadd = {
    member_delivery_id: req.body.member_delivery_id,
    member_delivery_detail_product_id: req.body.member_delivery_detail_product_id,
    member_delivery_detail_product_name: req.body.member_delivery_detail_product_name,
    member_delivery_detail_product_amoumt: req.body.member_delivery_detail_product_amoumt,
    member_delivery_detail_product_currency: req.body.member_delivery_detail_product_currency,
  };
  const sql = "INSERT INTO report_delivery_detail_in_province SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
