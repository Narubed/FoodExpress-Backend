const dbCon = require("../../config/db.js");
module.exports = getAnnounceAdvert = async (req, res) => {
  dbCon.query("SELECT * FROM announve_advert", (error, results, fields) => {
    if (error) console.log("get All getAnnounceSlide = ");
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "getAnnounceSlide table is empty";
    } else {
      message = "Successfully retrieved all getAnnounceSlide";
    }
    return res.send({
      error: false,
      data: results,
      message: message,
    });
  });
};
