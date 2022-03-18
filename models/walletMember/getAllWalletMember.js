const dbCon = require("../../config/db.js");
module.exports = getAllWalletMember = async (req, res) => {
  dbCon.query(
    "SELECT * FROM wallet_member_express",
    (error, results, fields) => {
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "getAllWalletMember table is empty";
      } else {
        message = "Successfully retrieved all getAllWalletMember";
      }
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    }
  );
};
