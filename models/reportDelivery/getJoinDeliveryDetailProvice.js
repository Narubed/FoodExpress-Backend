const dbCon = require("../../config/db.js");
module.exports = getJoinDeliveryDetailProvice = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM report_delivery_in_province INNER JOIN report_delivery_detail_in_province ON report_delivery_in_province.member_delivery_id = report_delivery_detail_in_province.member_delivery_id",
    (error, results, fields) => {
      // if (error)
      //     throw error;
      console.log("get All getJoinDeliveryDetailProvice");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "getJoinDeliveryDetailProvice table is empty";
      } else {
        message = "Successfully retrieved all getJoinDeliveryDetailProvice";
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
