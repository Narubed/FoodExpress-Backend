const dbCon = require("../../config/db.js");
module.exports = getStockMemberJoinProduct = async (req, res) => {
  dbCon.query(
    "SELECT * FROM stock_product_member INNER JOIN product ON stock_product_id = productid",
    (error, results, fields) => {
      // if (error)
      //     throw error;
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "getStockMemberJoinProduct table is empty";
      } else {
        message = "Successfully retrieved all getStockMemberJoinProduct";
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
