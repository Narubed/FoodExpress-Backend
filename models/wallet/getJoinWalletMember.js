
const dbCon = require("../../config/db.js");
module.exports = getJoinWalletMember = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM wallet_express INNER JOIN member ON wallet_express.wallet_member_id = member.userId",
    (error, results, fields) => {
      // if (error) throw error;
      console.log("get All getJoinWalletMember");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "product table is getJoinWalletMember";
      } else {
        message = "Successfully retrieved all getJoinWalletMember";
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
