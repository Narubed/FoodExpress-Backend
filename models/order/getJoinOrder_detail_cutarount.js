const dbCon = require("../../config/db.js");
module.exports = getJoinOrder_detail_cutarount = async (req, res) => {
  dbCon.query(
    "SELECT * FROM order_foodexpress INNER JOIN order_detail_foodexpress ON order_foodexpress.order_id = order_detail_foodexpress.order_id INNER JOIN cut_around_order_foodexpress ON order_detail_foodexpress.cut_arount_id = cut_around_order_foodexpress.cut_arount_id",
    (error, results, fields) => {
      // if (error) throw error;
      console.log("get All getJoinOrder_detail_cutarount_member");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "product table is getJoinOrder_detail_cutarount_member";
      } else {
        message = "Successfully retrieved all getJoinOrder_detail_cutarount_member";
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
