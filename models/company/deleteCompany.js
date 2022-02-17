const dbCon = require("../../config/db.js");

module.exports = deleteCompany = (req, res) => {
  console.log(req.params.id);
  let company_id = req.params.id;
  if (!company_id) {
    return res.status(400).send({
      error: true,
      message: "Please provide deleteCompany id",
    });
  } else {
    dbCon.query(
      "DELETE FROM company WHERE company_id = ?",
      [company_id],
      (error, results, fields) => {
        let message = "";
        if (results.affectedRows === 0) {
          message = "deleteCompany not found";
        } else {
          message = "deleteCompany successfully deleted";
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
