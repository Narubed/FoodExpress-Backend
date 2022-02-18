const dbCon = require("../../config/db.js");
module.exports = getDeliveryDetailByDeliveryID = (req, res) => {
  console.log(req.params.id);
  let member_delivery_id  = req.params.id;
  if (!member_delivery_id ) {
    return res.status(400).send({
      error: true,
      message: "Please getDeliveryDetailByDeliveryID book id",
    });
  } else {
    dbCon.query(
      "SELECT * FROM report_delivery_detail_in_province WHERE member_delivery_id = ?",
      member_delivery_id ,
      (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        let message = "";
        if (results === undefined || results.length == 0) {
          message = 1;
        } else {
          message = "Successfully retrieved getDeliveryDetailByDeliveryID";
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
