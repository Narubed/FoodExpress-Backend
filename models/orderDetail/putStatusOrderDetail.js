const connection = require("../../config/db.js")
module.exports = putStatusOrderDetail = (req, res) => {
  console.log(req.body);
  let order_detail_id = req.body.order_detail_id;
  let order_company_status = req.body.order_company_status;
  // validation
  if (!order_detail_id || !order_company_status) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putStatusOrderDetail Sumone.",
    });
  } else {
    connection.query(
      "UPDATE order_detail_foodexpress SET order_company_status = ? WHERE order_detail_id = ?",
      [order_company_status, order_detail_id],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "putStatusOrderDetail not found or data are same";
        } else {
          message = "putStatusOrderDetail successfully updated";
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
