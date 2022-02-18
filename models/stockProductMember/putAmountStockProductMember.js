const connection = require("../../config/db.js")
module.exports = putAmountStockProductMember = (req, res) => {
  console.log(req.body);
  let id_stock_product_member_id = req.body.id_stock_product_member_id;
  let stock_product_amount = req.body.stock_product_amount;
  // validation
  if (!id_stock_product_member_id) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putAmountStockProductMember Sumone.",
    });
  } else {
    connection.query(
      "UPDATE stock_product_member SET stock_product_amount = ? WHERE id_stock_product_member_id = ?",
      [stock_product_amount, id_stock_product_member_id],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "putAmountStockProductMember not found or data are same";
        } else {
          message = "putAmountStockProductMember successfully updated";
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
