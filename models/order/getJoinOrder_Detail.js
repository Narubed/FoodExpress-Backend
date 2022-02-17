const dbCon = require("../../config/db.js");
module.exports = getJoinOrder_Detail = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM order_foodexpress INNER JOIN order_detail_foodexpress ON order_foodexpress.order_id = order_detail_foodexpress.order_id INNER JOIN product ON order_detail_foodexpress.order_product_id = product.productid",
    (error, results, fields) => {
      // if (error) throw error;
      console.log("get All getJoinOrder_Detail");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "product table is getJoinOrder_Detail";
      } else {
        message = "Successfully retrieved all getJoinOrder_Detail";
      }
      // console.log(results)
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    }
  );
};
