const connection = require("../../config/db.js");
module.exports = putPercent = (req, res) => {
  console.log(req.body);
  let percent_id = req.body.percent_id;
  let percent_name = req.body.percent_name;
  let percent_subdistrict = req.body.percent_subdistrict;
  let percent_district = req.body.percent_district;
  let percent_provice = req.body.percent_provice;
  let percent_nba = req.body.percent_nba;

  // validation
  if (
    !percent_id ||
    !percent_name ||
    !percent_nba 
  ) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt percent_wallet Sumone.",
    });
  } else {
    connection.query(
      "UPDATE percent_wallet SET percent_name = ?,percent_subdistrict = ?, percent_district = ?, percent_provice = ?, percent_nba = ? WHERE percent_id = ?",
      [
        percent_name,
        percent_subdistrict,
        percent_district,
        percent_provice,
        percent_nba,
        percent_id,
      ],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "percent_wallet not found or data are same";
        } else {
          message = "percent_wallet successfully updated";
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
