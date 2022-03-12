const connection = require("../../config/db.js");
module.exports = putCompany = (req, res) => {
  console.log(req.body);
  let company_id = req.body.company_id;
  let company_name = req.body.company_name;
  let company_tel = req.body.company_tel;
  let book_name = req.body.book_name;
  let book_number = req.body.book_number;
  let company_address = req.body.company_address;
  let company_login_id = req.body.company_login_id;
  let company_login_pw = req.body.company_login_pw;
  let company_taxpayer_number = req.body.company_taxpayer_number;
  let company_line_id = req.body.company_line_id;
  // validation
  if (!company_id || !company_name) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt putCompany Sumone.",
    });
  } else {
    connection.query(
      "UPDATE company SET  company_name = ?, company_tel = ?,book_name = ?,book_number = ?, company_address = ?company_login_id= ?, company_login_pw= ?, company_taxpayer_number= ?, company_line_id= ? WHERE company_id = ?",
      [
        company_name,
        company_tel,
        book_name,
        book_number,
        company_address,
        company_id,
        company_login_id,
        company_login_pw,
        company_taxpayer_number,
        company_line_id,
      ],
      (error, results, fields) => {
        let message = "";
        if (results.changedRows === 0) {
          message = "putCompany not found or data are same";
        } else {
          message = "putCompany successfully updated";
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
