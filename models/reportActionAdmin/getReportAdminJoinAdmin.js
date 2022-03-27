const dbCon = require("../../config/db.js");
module.exports = getReportAdminJoinAdmin = async (req, res) => {
  //     SELECT *
  // FROM product
  // RIGHT JOIN producttype
  // ON product.typeid = producttype.id;

  dbCon.query(
    "SELECT * FROM report_action_admin INNER JOIN admin_foodexpress ON report_action_admin.report_action_admin_id = admin_foodexpress.admin_auto_id",
    (error, results, fields) => {
      // if (error) throw error;
      console.log("get All getReportAdminJoinAdmin");
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "product table is getReportAdminJoinAdmin";
      } else {
        message = "Successfully retrieved all getReportAdminJoinAdmin";
      }
      // console.log(results)
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    }
  );
};
