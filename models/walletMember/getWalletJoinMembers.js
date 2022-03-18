
const dbCon = require("../../config/db.js");
module.exports = getWalletJoinMembers = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM wallet_member_express INNER JOIN member ON wallet_member_express.wallet_member_id_express = member.userId",
    (error, results, fields) => {
      // if (error) throw error;
      console.log("get All getWalletJoinMembers");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "product table is getWalletJoinMembers";
      } else {
        message = "Successfully retrieved all getWalletJoinMembers";
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
