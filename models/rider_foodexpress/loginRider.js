const dbCon = require("../../config/db.js")
module.exports = loginRider = (req, res) => {
    let rider_id_login = req.body.setUserNames;
    let rider_pw_login = req.body.setPasswords;
    console.log("rider_id_login=" , rider_id_login)
    console.log(rider_pw_login + "*******")
   
    // validation
    if (!rider_id_login || !rider_pw_login ) {
        console.log("if แรก")
        return res.status(400).send({
            error: true,
            message: "Please provide NOt member Sumone."
        });
    } else {
        dbCon.query("SELECT * FROM rider_foodexpress WHERE rider_id_login = ? and rider_pw_login = ?", [rider_id_login,rider_pw_login], (error, results, fields) => {
            // if (error) throw error;
           
            let message = "";
            let accessToken = "";
            if (results === undefined || results.length == 0) {
                message = "error"
                return res.send( {message : message })
            } else {
                     message = "success";
                     accessToken = "NBA";
  console.log("results=>" +results[0] )
            return res.send({
                error: false,
                data: results[0],
                message: message,
                accessToken:accessToken

            })
            }
          
        })
    }
}