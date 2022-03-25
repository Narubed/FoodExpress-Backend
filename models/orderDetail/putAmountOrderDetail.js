const connection = require("../../config/db.js")
module.exports = putAmountOrderDetail = (req, res) => {
  console.log(req.body);
  let order_detail_id = req.body.order_detail_id;
  let order_product_amoumt = req.body.order_product_amoumt;
  // validation
  if (!order_detail_id || !order_product_amoumt) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putAmountOrderDetail Sumone.",
    });
  } else {
    connection.query(
      "UPDATE order_detail_foodexpress SET order_product_amoumt = ? WHERE order_detail_id = ?",
      [order_product_amoumt, order_detail_id],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "putAmountOrderDetail not found or data are same";
        } else {
          message = "putAmountOrderDetail successfully updated";
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
