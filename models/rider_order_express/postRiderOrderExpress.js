const connection = require("../../config/db.js");
module.exports = postRiderOrderExpress = (req, res) => {
  const classifiedsadd = {
    id_order_rider_id: req.body.id_order_rider_id,
    order_rider_id: req.body.order_rider_id,
    order_rider_product_id: req.body.order_rider_product_id,
    order_rider_product_name: req.body.order_rider_product_name,
    order_rider_Amount: req.body.order_rider_Amount,
    order_rider_company_name: req.body.order_rider_company_name,
    order_rider_company_company_address:
      req.body.order_rider_company_company_address,
    order_rider_member_userid: req.body.order_rider_member_userid,
    order_rider_member_address: req.body.order_rider_member_address,
    order_rider_status: req.body.order_rider_status,
    order_rider_cut_arount_id: req.body.order_rider_cut_arount_id,
    order_rider_date_cut_arount: req.body.order_rider_date_cut_arount,
    order_rider_province_cut_arount: req.body.order_rider_province_cut_arount,
  };
  const sql = "INSERT INTO order_rider_express SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
