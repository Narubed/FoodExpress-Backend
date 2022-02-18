const dbCon = require("../../config/db.js");
module.exports = getJoinDeliveryProviceAndMemberReceiver = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM report_delivery_in_province INNER JOIN member ON report_delivery_in_province.receiver_delivery_member_id = member.userId",
    (error, results, fields) => {
      // if (error)
      //     throw error;
      console.log("get All getJoinDeliveryProviceAndMemberReceiver");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "getJoinDeliveryProviceAndMemberReceiver table is empty";
      } else {
        message = "Successfully retrieved all getJoinDeliveryProviceAndMemberReceiver";
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
