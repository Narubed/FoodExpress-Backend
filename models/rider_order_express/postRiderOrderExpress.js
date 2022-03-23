const connection = require("../../config/db.js");
module.exports = postRiderOrderExpress = (req, res) => {
  const classifiedsadd = {
    id_order_rider_id: req.body.id_order_rider_id,
    order_rider_id: req.body.order_rider_id,
    order_rider_product_id: req.body.order_rider_product_id,
    order_rider_product_name: req.body.order_rider_product_name,
    order_rider_amount: req.body.order_rider_amount,
    order_rider_currency: req.body.order_rider_currency,
    order_rider_dealer_type: req.body.order_rider_dealer_type,
    order_rider_dealer_name: req.body.order_rider_dealer_name,
    order_rider_dealer_id: req.body.order_rider_dealer_id,
    order_rider_dealer_note: req.body.order_rider_dealer_note,
    order_rider_consignee_type: req.body.order_rider_consignee_type,
    order_rider_consignee_name: req.body.order_rider_consignee_name,
    order_rider_consignee_id: req.body.order_rider_consignee_id,
    order_rider_consignee_note: req.body.order_rider_consignee_note,
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
