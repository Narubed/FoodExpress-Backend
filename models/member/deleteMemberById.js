const dbCon = require("../../config/db.js");
module.exports = deleteMembers = (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(400).send({
      error: true,
      message: "Please provide  id",
    });
  } else {
    dbCon.query(
      "DELETE FROM member WHERE id = ?",
      id,
      (error, results, fields) => {
        // if (error) throw error;

        let message = "";
        if (results.affectedRows === 0) {
          message = 1;
        } else {
          message = "deleteMembers successfully ";
        }
        console.log(message);
        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};
