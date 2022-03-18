const connection = require("../../config/db.js");
module.exports = putWalletMemberTotal = (req, res) => {
  console.log(req.body);
  let id_wallet_member_express = req.body.id_wallet_member_express;
  let wallet_member_total = req.body.wallet_member_total;
  // validation
  if (!id_wallet_member_express) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt wallet_member_express Sumone.",
    });
  } else {
    connection.query(
      "UPDATE wallet_member_express SET wallet_member_total = ? WHERE id_wallet_member_express = ?",
      [wallet_member_total, id_wallet_member_express],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "wallet_member_express not found or data are same";
        } else {
          message = "wallet_member_express successfully updated";
        }
        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};
