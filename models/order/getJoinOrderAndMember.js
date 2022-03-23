const dbCon = require("../../config/db.js");
module.exports = getJoinOrderAndMember = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM order_foodexpress INNER JOIN member ON order_foodexpress.order_member_id =  member.userId",
    (error, results, fields) => {
      // if (error) throw error;
      console.log("get All getJoinOrderAndMember");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "product table is getJoinOrderAndMember";
      } else {
        message = "Successfully retrieved all v";
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
