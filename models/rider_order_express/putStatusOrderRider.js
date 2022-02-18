const connection = require("../../config/db.js")
module.exports = putStatusOrderRider = (req, res) => {
  console.log(req.body);
  let id_order_rider_id = req.body.id_order_rider_id;
  let order_rider_status = req.body.order_rider_status;
  // validation
  if (!id_order_rider_id || !order_rider_status) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putStatusOrderRider Sumone.",
    });
  } else {
    connection.query(
      "UPDATE order_rider_express SET order_rider_status = ? WHERE id_order_rider_id = ?",
      [order_rider_status, id_order_rider_id],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "putStatusOrderRider not found or data are same";
        } else {
          message = "putStatusOrderRider successfully updated";
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
