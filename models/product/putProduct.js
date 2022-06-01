const connection = require("../../config/db.js");
module.exports = putProduct = (req, res) => {
  console.log("putProduct", req.body);
  //   let productImg: req.file.filename,
  let productid = req.body.productid;
  let productName = req.body.productName;
  let productPrice = req.body.productPrice;
  let productCost = req.body.productCost;
  let productStetus = req.body.productStetus;
  let typeid = req.body.typeid;
  let unitkg = req.body.unitkg;
  let currency = req.body.currency;
  let percent_service = req.body.percent_service;
  let percent_NBA = req.body.percent_NBA;
  // validation
  if (
    !productName ||
    !productPrice ||
    !productCost ||
    !productStetus ||
    !typeid ||
    !productid ||
    !unitkg ||
    !currency
  ) {
    return res.status(400).send({
      error: true,
      message: "Please provide NOt Product Sumone.",
    });
  } else {
    connection.query(
      "UPDATE product SET productName = ?, productPrice = ?, productCost = ?, productStetus = ?, typeid = ?,unitkg = ?,currency = ?,percent_service = ?,percent_NBA = ? WHERE productid = ?",
      [
        productName,
        productPrice,
        productCost,
        productStetus,
        typeid,
        unitkg,
        currency,
        percent_service,
        percent_NBA,
        productid,
      ],
      (error, results, fields) => {
        if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "Product not found or data are same";
        } else {
          message = "Product successfully updated";
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
