const connection = require("../../config/db.js");
module.exports = postWalletMember = (req, res) => {
  console.log(req.body);
  const classifiedsadd = {
    wallet_member_id_express: req.body.wallet_member_id_express,
    wallet_member_total: req.body.wallet_member_total,
  };
  const sql = "INSERT INTO wallet_member_express SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
