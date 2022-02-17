const connection = require("../../config/db.js")
module.exports = putAnnounceSlide = (req, res) => {
    console.log(req.body)
    let announve_slide_id = req.body.announve_slide_id;
    let announce_slide_data	 = req.body.announce_slide_data;
    // validation
    if (!announve_slide_id || !announce_slide_data ) {
        return res.status(400).send({
            error: true,
            message: "Please provide NOt putAnnounceSlide Sumone."
        });
    } else {
        connection.query('UPDATE announve_slide SET  announce_slide_data = ? WHERE announve_slide_id = ?', [ announce_slide_data, announve_slide_id], (error, results, fields) => {
            // if (error) throw error;
            let message = "";
            if (results.changedRows === 0) {
                message = "putAnnounceSlide not found or data are same";
            } else {
                message = "putAnnounceSlide successfully updated";
            }

            return res.send({
                error: false,
                data: results,
                message: message
            })
        })
    }
}