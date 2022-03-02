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
const getAllCutArount = require("./models/cut_arount/getAllCutArount.js");


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

const postOrderDetail = require("./models/orderDetail/postOrderDetail.js");
const getByOrderDetail_id = require("./models/orderDetail/getByOrderDetail_id.js");
const putStatusOrderDetail = require("./models/orderDetail/putStatusOrderDetail.js");
const putCutArountStatus = require("./models/orderDetail/putCutArountStatus.js");
const putStatusOrderDetail_inProvince = require("./models/orderDetail/putStatusOrderDetail_inProvince.js");

const portReportOrderMember = require("./models/report_order_member/portReportOrderMember.js");
const getAllReportOrderMember = require("./models/report_order_member/getAllReportOrderMember.js");
const getReportOrderMemberJoinProduct = require("./models/report_order_member/getReportOrderMemberJoinProduct.js");

const getDeliveryByUserID = require("./models/reportDelivery/getDeliveryByUserID.js");
const getJoinDeliveryDetailProvice = require("./models/reportDelivery/getJoinDeliveryDetailProvice.js");
const getJoinDeliveryProviceAndMemberReceiver = require("./models/reportDelivery/getJoinDeliveryProviceAndMemberReceiver.js");
const getJoinDeliveryProviceAndMemberDelivery = require("./models/reportDelivery/getJoinDeliveryProviceAndMemberDelivery.js");
const portDeliveryInProvice = require("./models/reportDelivery/portDeliveryInProvice.js");
const putStatusDeliveryProvice = require("./models/reportDelivery/putStatusDeliveryProvice.js");

const portDeliveryDetailInProvice = require("./models/reportDeliveryDetail/portDeliveryDetailInProvice.js");
const getDeliveryDetailByDeliveryID = require("./models/reportDeliveryDetail/getDeliveryDetailByDeliveryID.js");

const postRiderOrderExpress = require("./models/rider_order_express/postRiderOrderExpress.js");
const getAllRiderOrderExpressJoinMember = require("./models/rider_order_express/getAllRiderOrderExpressJoinMember.js");
const getAllOrderExpressJoinRider = require("./models/rider_order_express/getAllOrderExpressJoinRider.js");
const putStatusOrderRider = require("./models/rider_order_express/putStatusOrderRider.js");

const postStockProductMember = require("./models/stockProductMember/postStockProductMember");
const getStockProductMemberByUserID = require("./models/stockProductMember/getStockProductMemberByUserID.js");
const putAmountStockProductMember = require("./models/stockProductMember/putAmountStockProductMember.js");
const getStockMemberJoinProduct = require("./models/stockProductMember/getStockMemberJoinProduct.js");

const getAllWallet = require("./models/wallet/getAllWallet.js");
const postWallet = require("./models/wallet/postWallet.js");
const getWalletById = require("./models/wallet/getWalletById.js");
const putSlipWallet = require("./models/wallet/putSlipWallet.js");
const putWalletTotal = require("./models/wallet/putWalletTotal.js");
const getJoinWalletMember = require("./models/wallet/getJoinWalletMember.js");

const loginAdmin = require("./models/admin/loginAdmin");
const getAllAdmin = require("./models/admin/getAllAdmin.js");
const deleteAdmin = require("./models/admin/deleteAdmin.js");
const getAdminByAutoID = require("./models/admin/getAdminByAutoID.js");
const postAdmin = require("./models/admin/postAdmin.js");
const putAdmin = require("./models/admin/putAdmin.js");

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

app.get("/getAllCutArount", getAllCutArount)

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
app.post("/postOrderDetail", postOrderDetail);

app.get("/getByOrderDetail_id/:id", getByOrderDetail_id);

app.put("/putStatusOrderDetail", putStatusOrderDetail);

app.put("/putCutArountStatus", putCutArountStatus);

app.put("/putStatusOrderDetail_inProvince", putStatusOrderDetail_inProvince);
//----------------------------------------------------------------------
app.post("/portReportOrderMember", portReportOrderMember);

app.get("/getAllReportOrderMember", getAllReportOrderMember);

app.get("/getReportOrderMemberJoinProduct", getReportOrderMemberJoinProduct);
//-------------------------------------------------------------------------
app.get("/getDeliveryByUserID/:id", getDeliveryByUserID);

app.get("/getJoinDeliveryDetailProvice", getJoinDeliveryDetailProvice);

app.get(
  "/getJoinDeliveryProviceAndMemberReceiver",
  getJoinDeliveryProviceAndMemberReceiver
);

app.get(
  "/getJoinDeliveryProviceAndMemberDelivery",
  getJoinDeliveryProviceAndMemberDelivery
);

app.post("/portDeliveryInProvice", portDeliveryInProvice);

app.put("/putStatusDeliveryProvice", putStatusDeliveryProvice);
//--------------------------------------------------------
app.post("/portDeliveryDetailInProvice", portDeliveryDetailInProvice);
app.get("/getDeliveryDetailByDeliveryID/:id", getDeliveryDetailByDeliveryID);
//-------------------------------------------------------------
app.post("/postRiderOrderExpress", postRiderOrderExpress);
app.get(
  "/getAllRiderOrderExpressJoinMember",
  getAllRiderOrderExpressJoinMember
);
app.get("/getAllOrderExpressJoinRider", getAllOrderExpressJoinRider);
app.put("/putStatusOrderRider", putStatusOrderRider);
//----------------------------------------------------------------
app.post("/postStockProductMember", postStockProductMember);

app.get("/getStockProductMemberByUserID/:id", getStockProductMemberByUserID);

app.put("/putAmountStockProductMember", putAmountStockProductMember);

app.get("/getStockMemberJoinProduct", getStockMemberJoinProduct);
//---------------------------------------------------------------------------
app.get("/getAllWallet", getAllWallet);

app.post("/postWallet", postWallet);

app.get("/getWalletById/:id", getWalletById);

app.put("/putSlipWallet", putSlipWallet);

app.put("/putWalletTotal", putWalletTotal);

app.get("/getJoinWalletMember", getJoinWalletMember);
//----------------------------------------------------------------------
app.post("/loginAdmin", loginAdmin);

app.get("/getAllAdmin", getAllAdmin);

app.delete("/deleteAdmin/:id", deleteAdmin);

app.get("/getAdminByAutoID/:id", getAdminByAutoID);

app.post("/postAdmin", postAdmin);

app.put("/putAdmin", putAdmin);
//---------------------------------------------------------------------
app.listen(PORT, () => {
  console.log("Node App is running on port =", PORT);
});

module.exports = app;
