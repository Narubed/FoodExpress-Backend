const connection = require("../../config/db.js");
module.exports = portReportWalletMember = (req, res) => {
  console.log(req.body);
  const classifiedsadd = {
    report_wallet_member_id: req.body.report_wallet_member_id,
    report_wallet_member_total: req.body.report_wallet_member_total,
    report_wallet_member_status: req.body.report_wallet_member_status,
    report_wallet_member_slip: "",
  };
  const sql = "INSERT INTO report_wallet_member_express SET ?";
  connection.query(sql, classifiedsadd, (err, results) => {
    if (err) throw err;
    res.json({ success: 1 });
  });
};
