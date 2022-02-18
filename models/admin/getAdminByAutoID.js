const dbCon = require("../../config/db.js")
module.exports = getAdminByAutoID = (req, res) => {
    console.log("getAdminByAutoID=" , req.params.id)
    let admin_auto_id = req.params.id;
    
    if (!admin_auto_id) {
        return res.status(400).send({
            error: true,
            message: "Please provide  getAdminByAutoID "
        });
    } else {
        dbCon.query("SELECT * FROM admin_foodexpress WHERE admin_auto_id = ?", admin_auto_id, (error, results, fields) => {
            // if (error) throw error;
            console.log("order_foodexpress byid = " , results)
            let message = "";
            if (results === undefined || results.length == 0) {
                message = "getAdminByAutoID not found";
            } else {
                message = "Successfully retrieved getAdminByAutoID data";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}