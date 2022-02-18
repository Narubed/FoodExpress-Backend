const dbCon = require("../../config/db.js");
module.exports = getJoinDeliveryProviceAndMemberDelivery = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM report_delivery_in_province INNER JOIN member ON report_delivery_in_province.member_delivery_member_id = member.userId",
    (error, results, fields) => {
      // if (error)
      //     throw error;
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "getJoinDeliveryProviceAndMemberDelivery table is empty";
      } else {
        message =
          "Successfully retrieved all getJoinDeliveryProviceAndMemberDelivery";
      }
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    }
  );
};
