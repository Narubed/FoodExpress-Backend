let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8000;
require("dotenv").config();

const cors = require("cors");

const getMembers = require("./models/member/getAllMember.model.js");
const postMember = require("./models/member/postMember.model.js");
const getByIdMemmber = require("./models/member/getByIdMember.model.js");
const putMembers = require("./models/member/putMembet.model.js");
const deleteMember = require("./models/member/deleteMember");
const loginMember = require("./models/member/loginMember.model.js");
const deleteMemberById = require("./models/member/deleteMemberById.js");
const getMemberByid = require("./models/member/getMemberByid.js");
const postMemberCardImg = require("./models/member/postMemberCardImg.js");
const postMemberBookBankImg = require("./models/member/postMemberBookBankImg.js");
const putChangePassword = require("./models/member/putChangePassword");

const deleteImageName = require("./models/product/deleteImageName.js");

const postProduct = require("./models/product/postProduct.js");
const getAllProduct = require("./models/product/getAllProduct.js");
const deleteProduct = require("./models/product/deleteProduct.js");
const getByidProduct = require("./models/product/getByidProduct.js");
const putProduct = require("./models/product/putProduct");
const posrProductType = require("./models/productType/postProductType.js");
const getAllProductType = require("./models/productType/getAllProductType.js");
const getByIdProductType = require("./models/productType/getByIdProductType.js");
const putProductType = require("./models/productType/putProductType.js");
const deleteProductType = require("./models/productType/deleteProductType.js");
const getJoinProductType = require("./models/product/getJoinProductType.js");

const postCompany = require("./models/company/postCompany.js");
const getAllCompany = require("./models/company/getAllCompany.js");
const putCompany = require("./models/company/putCompany.js");
const deleteCompany = require("./models/company/deleteCompany.js");

const postRider = require("./models/rider_foodexpress/postRider.js");
const getAllRider = require("./models/rider_foodexpress/getAllRider.js");
const deleteRider = require("./models/rider_foodexpress/deleteRider.js");
const putRider = require("./models/rider_foodexpress/putRider.js");
const getRiderById = require("./models/rider_foodexpress/getRiderById.js");
const loginRider = require("./models/rider_foodexpress/loginRider.js");

const CreateCutArount = require("./models/cut_arount/CreateCutArount.js");
const getByOrderCutArountID = require("./models/cut_arount/getByOrderCutArountID.js");

const getAnnounceSlide = require("./models/announce/getAnnounceSlide.js");
const putAnnounceSlide = require("./models/announce/putAnnounceSlide.js");
const putAnnounceAdvert = require("./models/announce/putAnnounceAdvert.js");
const getAnnounceAdvert = require("./models/announce/getAnnounceAdvert");

const getAllPrecent = require("./models/percentWallet/getAllPrecent.js");
const putPercent = require("./models/percentWallet/putPercent.js");

const getAllOrder = require("./models/order/getAllOrder");
const getByOrderId = require("./models/order/getByOrderId");
const getByOrderMember_id = require("./models/order/getByOrderMember_id");
const putOrderPercentNBA = require("./models/order/putOrderPercentNBA");
const postOrder = require("./models/order/postOrder.js");
const getJoinOrder_Detail = require("./models/order/getJoinOrder_Detail.js");
const putSlip = require("./models/order/putSlip.js");
const putStatusOrder = require("./models/order/putStatusOrder.js");
const getJoinOrder_Member = require("./models/order/getJoinOrder_Member.js");
const getJoinOrder_detail_cutarount = require("./models/order/getJoinOrder_detail_cutarount.js");

// const postOrderDetail = require("./models/orderDetail/postOrderDetail.js");
// const getByOrderDetail_id = require("./models/orderDetail/getByOrderDetail_id.js");
// const putStatusOrderDetail = require("./models/orderDetail/putStatusOrderDetail.js");
// const putCutArountStatus = require("./models/orderDetail/putCutArountStatus.js");
const putStatusOrderDetail_INProvince = require("./models/orderDetail/putStatusOrderDetail_INProvince.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
// homepage route
app.get("/", (req, res) => {
  return res.send({
    error: false,
    message: "Welcome to RESTful CRUD API with NodeJS, Express, MYSQL",
    written_by: "Narubed ",
  });
});

app.get("/members", getMembers);

app.post("/member", postMember);

app.get("/member/:id", getByIdMemmber);

app.get("/getMemberByid/:id", getMemberByid);

app.put("/member", putMembers);

app.delete("/member/:id", deleteMember);

app.delete("/memberId/:id", deleteMemberById);

app.post("/postMemberCardImg", postMemberCardImg);

app.post("/postMemberBookBankImg", postMemberBookBankImg);

app.put("/putChangePassword", putChangePassword);

app.post("/login", loginMember);
// ----------------------------------------------------
app.delete("/deleteimage/:id", deleteImageName);
// ----------------------------------------------------
app.post("/imageupload", postProduct);

app.get("/products", getAllProduct);

app.delete("/product/:id", deleteProduct);

app.get("/product/:id", getByidProduct);

app.put("/product", putProduct);
//----------------------------------------------------
app.post("/producttype", posrProductType);

app.get("/producttypes", getAllProductType);

app.get("/producttype/:id", getByIdProductType);

app.put("/producttype", putProductType);

app.delete("/producttype/:id", deleteProductType);

app.get("/getJoinProductType", getJoinProductType);

//----------------------------------------------------
app.post("/postCompany", postCompany);

app.get("/getAllCompany", getAllCompany);

app.put("/putCompany", putCompany);

app.delete("/deleteCompany/:id", deleteCompany);
//-----------------------------------------------------
app.post("/postRider", postRider);

app.get("/getAllRider", getAllRider);

app.delete("/deleteRider/:id", deleteRider);

app.put("/putRider", putRider);

app.get("/getRiderById/:id", getRiderById);

app.post("/loginRider", loginRider);
//----------------------------------------------------
app.get("/getByOrderCutArountID/:id", getByOrderCutArountID);

app.post("/CreateCutArount", CreateCutArount);
//-----------------------------------------------------

app.get("/getAnnounceSlide", getAnnounceSlide);

app.put("/putAnnounceSlide", putAnnounceSlide);

app.put("/putAnnounceAdvert", putAnnounceAdvert);

app.get("/getAnnounceAdvert", getAnnounceAdvert);
//----------------------------------------------------
app.get("/getAllPrecent", getAllPrecent);

app.put("/putPercent", putPercent);
//---------------------------------------------------------
app.get("/getAllOrder", getAllOrder);

app.get("/getByOrderId/:id", getByOrderId);

app.get("/getByOrderMember_id/:id", getByOrderMember_id);

app.put("/putOrderPercentNBA", putOrderPercentNBA);

app.post("/postOrder", postOrder);

app.get("/getJoinOrder_Detail", getJoinOrder_Detail);

app.put("/putSlip", putSlip);

app.put("/putStatusOrder", putStatusOrder);

app.get("/getJoinOrder_Member", getJoinOrder_Member);

app.get("/getJoinOrder_detail_cutarount", getJoinOrder_detail_cutarount);
// //------------------------------------------------------------------
// app.post("/postOrderDetail", postOrderDetail);

// app.get("/getByOrderDetail_id/:id", getByOrderDetail_id);

// app.put("/putStatusOrderDetail", putStatusOrderDetail);

// app.put("/putCutArountStatus", putCutArountStatus);

app.put("/putStatusOrderDetail_inProvince", putStatusOrderDetail_INProvince);
//----------------------------------------------------------------------

app.listen(PORT, () => {
  console.log("Node App is running on port =", PORT);
});

module.exports = app;
