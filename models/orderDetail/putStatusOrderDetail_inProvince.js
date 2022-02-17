const connection = require("../../config/db.js")
module.exports = putStatusOrderDetail_inProvince = (req, res) => {
  let order_detail_id = req.body.order_detail_id;
  let order_status_in_province = req.body.order_status_in_province;
  // validation
  if (!order_detail_id) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putStatusOrderDetail_inProvince Sumone.",
    });
  } else {
    connection.query(
      "UPDATE order_detail_foodexpress SET order_status_in_province = ? WHERE order_detail_id = ?",
      [order_status_in_province, order_detail_id],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "putStatusOrderDetail_inProvince not found or data are same";
        } else {
          message = "putStatusOrderDetail_inProvinces successfully updated";
        }

        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};
