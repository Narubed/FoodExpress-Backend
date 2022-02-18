const dbCon = require("../../config/db.js");
module.exports = getReportOrderMemberJoinProduct = async (req, res) => {
  dbCon.query(
    "SELECT * FROM report_order_member INNER JOIN product ON report_order_product_id = productid",
    (error, results, fields) => {
      // if (error)
      //     throw error;
      console.log("get All getReportOrderMemberJoinProduct");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "getReportOrderMemberJoinProduct table is empty";
      } else {
        message = "Successfully retrieved all getReportOrderMemberJoinProduct";
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
