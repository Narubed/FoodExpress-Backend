const dbCon = require("../../config/db.js");
module.exports = deleteMembers = (req, res) => {
  console.log("deletememver=", req.params.id);
  let userId = req.params.id;
  if (!userId) {
    return res.status(400).send({
      error: true,
      message: "Please provide userId id",
    });
  } else {
    dbCon.query(
      "DELETE FROM member WHERE userId = ?",
      userId,
      (error, results, fields) => {
        // if (error) throw error;

        let message = "";
        if (results.affectedRows === 0) {
          message = 1;
        } else {
          message = "Book successfully deleted";
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
