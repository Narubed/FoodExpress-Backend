const connection = require("../../config/db.js");
module.exports = putStatusDeliveryProvice = (req, res) => {
  console.log(req.body);
  let member_delivery_id = req.body.member_delivery_id;
  let member_delivery_status = req.body.member_delivery_status;
  // validation
  if (!member_delivery_id || !member_delivery_status) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putStatusDeliveryProvice Sumone.",
    });
  } else {
    connection.query(
      "UPDATE report_delivery_in_province SET member_delivery_status = ? WHERE member_delivery_id = ?",
      [member_delivery_status, member_delivery_id],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "putStatusDeliveryProvice not found or data are same";
        } else {
          message = "putStatusDeliveryProvice successfully updated";
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
