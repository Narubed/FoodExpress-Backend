const dbCon = require("../../config/db.js");
module.exports = getAllRiderOrder = async (req, res) => {
  dbCon.query("SELECT * FROM order_rider_express", (error, results, fields) => {
    // if (error)
    //     throw error;

    let message = "";
    if (results === undefined || results.length == 0) {
      message = "getAllRiderOrder table is empty";
    } else {
      message = "Successfully retrieved all getAllRiderOrder";
    }
    return res.send({
      error: false,
      data: results,
      message: message,
    });
  });
};
