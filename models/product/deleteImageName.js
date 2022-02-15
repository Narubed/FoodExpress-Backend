const dbCon = require("../../config/db.js")
module.exports = deleteImageName = (req, res) => {
    var fs = require('fs');
    console.log("DELETE IMAGE", req.params.id)
   if (!req.params.id){
    return res.status(400).send({
        error: true,
        message: "Please provide DELETE IMAGE id"
    });
   }
//    else{
//     //      fs.unlink(  `${process.env.EXPRESS_FIND_DELETE_IMAGE_FROUNTEND}`+ req.params.id, function (err) {
//     //     if (err) throw err;
//         // console.log('File deleted!');
//     //     return res.send({
//     //         error: false,
//     //         message: "Delete Image"
//     //     })

//     // })
//    }
  }