const connection = require("../../config/db.js")
module.exports = postRider = (req, res) => {
    
    const classifiedsadd = {
        rider_id_login : req.body.rider_id_login,
        rider_pw_login: req.body.rider_pw_login,
        rider_tel : req.body.rider_tel,
        rider_first_name : req.body.rider_first_name,
        rider_last_name : req.body.rider_last_name,
    };
    const sql = "INSERT INTO rider_foodexpress SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
        res.json({ success: 1 })      
    });
}