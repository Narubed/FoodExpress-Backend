
const dbCon = require("../../config/db.js");
module.exports = getReportWalletJoinMembers = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM report_wallet_member_express INNER JOIN member ON report_wallet_member_express.report_wallet_member_id = member.userId",
    (error, results, fields) => {
      // if (error) throw error;
      console.log("get All getReportWalletJoinMembers");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "product table is getReportWalletJoinMembers";
      } else {
        message = "Successfully retrieved all getReportWalletJoinMembers";
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
