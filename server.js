let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8000;
require("dotenv").config();

const cors = require("cors");

const postLineNotify = require("./models/lineNotify/postLineNotify");

const postReportActionAdmin = require("./models/reportActionAdmin/postReportActionAdmin");
const getReportAdminJoinAdmin = require("./models/reportActionAdmin/getReportAdminJoinAdmin");

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
const putImageProduct = require("./models/product/putImageProduct");

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
const getJoinOrderAndMember = require("./models/order/getJoinOrderAndMember.js");

const postOrderDetail = require("./models/orderDetail/postOrderDetail.js");
const getByOrderDetail_id = require("./models/orderDetail/getByOrderDetail_id.js");
const putStatusOrderDetail = require("./models/orderDetail/putStatusOrderDetail.js");
const putCutArountStatus = require("./models/orderDetail/putCutArountStatus.js");
const putStatusOrderDetail_inProvince = require("./models/orderDetail/putStatusOrderDetail_inProvince.js");
const getByCutArountID = require("./models/orderDetail/getByCutArountID.js");
const putAmountOrderDetail = require("./models/orderDetail/putAmountOrderDetail.js");

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
const getAllRiderOrder = require("./models/rider_order_express/getAllRiderOrder.js");
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

const postPercentOrderDetail = require("./models/percent_order_detail/postPercentOrderDetail");
const getJoin_order_detail_member = require("./models/percent_order_detail/getJoin_order_detail_member.js");

const postWalletMember = require("./models/walletMember/postWalletMember");
const getWalletMemberById = require("./models/walletMember/getWalletMemberById");
const getAllWalletMember = require("./models/walletMember/getAllWalletMember.js");
const putWalletMemberTotal = require("./models/walletMember/putWalletMemberTotal.js");
const getWalletJoinMembers = require("./models/walletMember/getWalletJoinMembers");

const portReportWalletMember = require("./models/reportWalletMember/portReportWalletMember");
const getReportWalletJoinMembers = require("./models/reportWalletMember/getReportWalletJoinMembers.js");
const putSlipWalletMember = require("./models/walletMember/putSlipWalletMember.js");

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
const api = "/api/foodexpress";
app.get("/", (req, res) => {
  return res.send({
    error: false,
    message: "Welcome to RESTful CRUD API with NodeJS, Express, MYSQL",
    written_by: "Narubed ",
  });
});

app.post(api + "/postLineNotify", postLineNotify);

app.post(api + "/postReportActionAdmin", postReportActionAdmin);

app.get(api + "/getReportAdminJoinAdmin", getReportAdminJoinAdmin);
//---------------------------------------------------------
app.get(`${api}/members`, getMembers);

app.post(api + "/member", postMember);

app.get(api + "/member/:id", getByIdMemmber);

app.get(api + "/getMemberByid/:id", getMemberByid);

app.put(api + "/member", putMembers);

app.delete(api + "/member/:id", deleteMember);

app.delete(api + "/memberId/:id", deleteMemberById);

app.post(api + "/postMemberCardImg", postMemberCardImg);

app.post(api + "/postMemberBookBankImg", postMemberBookBankImg);

app.put(api + "/putChangePassword", putChangePassword);

app.post(api + "/login", loginMember);
// ----------------------------------------------------
app.delete(api + "/deleteimage/:id", deleteImageName);
// ----------------------------------------------------
app.post(api + "/imageupload", postProduct);

app.get(api + "/products", getAllProduct);

app.delete(api + "/product/:id", deleteProduct);

app.get(api + "/product/:id", getByidProduct);

app.put(api + "/product", putProduct);
//----------------------------------------------------
app.post(api + "/producttype", posrProductType);

app.get(api + "/producttypes", getAllProductType);

app.get(api + "/producttype/:id", getByIdProductType);

app.put(api + "/producttype", putProductType);

app.delete(api + "/producttype/:id", deleteProductType);

app.get(api + "/getJoinProductType", getJoinProductType);

app.put(api + "/putImageProduct", putImageProduct);

//----------------------------------------------------
app.post(api + "/postCompany", postCompany);

app.get(api + "/getAllCompany", getAllCompany);

app.put(api + "/putCompany", putCompany);

app.delete(api + "/deleteCompany/:id", deleteCompany);
//-----------------------------------------------------
app.post(api + "/postRider", postRider);

app.get(api + "/getAllRider", getAllRider);

app.delete(api + "/deleteRider/:id", deleteRider);

app.put(api + "/putRider", putRider);

app.get(api + "/getRiderById/:id", getRiderById);

app.post(api + "/loginRider", loginRider);
//----------------------------------------------------
app.get(api + "/getByOrderCutArountID/:id", getByOrderCutArountID);

app.post(api + "/CreateCutArount", CreateCutArount);

app.get(api + "/getAllCutArount", getAllCutArount);

//-----------------------------------------------------

app.get(api + "/getAnnounceSlide", getAnnounceSlide);

app.put(api + "/putAnnounceSlide", putAnnounceSlide);

app.put(api + "/putAnnounceAdvert", putAnnounceAdvert);

app.get(api + "/getAnnounceAdvert", getAnnounceAdvert);
//----------------------------------------------------
app.get(api + "/getAllPrecent", getAllPrecent);

app.put(api + "/putPercent", putPercent);
//---------------------------------------------------------
app.get(api + "/getAllOrder", getAllOrder);

app.get(api + "/getByOrderId/:id", getByOrderId);

app.get(api + "/getByOrderMember_id/:id", getByOrderMember_id);

app.put(api + "/putOrderPercentNBA", putOrderPercentNBA);

app.post(api + "/postOrder", postOrder);

app.get(api + "/getJoinOrder_Detail", getJoinOrder_Detail);

app.put(api + "/putSlip", putSlip);

app.put(api + "/putStatusOrder", putStatusOrder);

app.get(api + "/getJoinOrder_Member", getJoinOrder_Member);

app.get(api + "/getJoinOrder_detail_cutarount", getJoinOrder_detail_cutarount);
app.get(api + "/getJoinOrderAndMember", getJoinOrderAndMember);
// //------------------------------------------------------------------
app.post(api + "/postOrderDetail", postOrderDetail);

app.get(api + "/getByOrderDetail_id/:id", getByOrderDetail_id);

app.put(api + "/putStatusOrderDetail", putStatusOrderDetail);

app.put(api + "/putCutArountStatus", putCutArountStatus);

app.put(
  api + "/putStatusOrderDetail_inProvince",
  putStatusOrderDetail_inProvince
);

app.get(api + "/getByCutArountID/:id", getByCutArountID);

app.put(api + "/putAmountOrderDetail", putAmountOrderDetail);

//----------------------------------------------------------------------
app.post(api + "/portReportOrderMember", portReportOrderMember);

app.get(api + "/getAllReportOrderMember", getAllReportOrderMember);

app.get(
  api + "/getReportOrderMemberJoinProduct",
  getReportOrderMemberJoinProduct
);
//-------------------------------------------------------------------------
app.get(api + "/getDeliveryByUserID/:id", getDeliveryByUserID);

app.get(api + "/getJoinDeliveryDetailProvice", getJoinDeliveryDetailProvice);

app.get(
  api + "/getJoinDeliveryProviceAndMemberReceiver",
  getJoinDeliveryProviceAndMemberReceiver
);

app.get(
  api + "/getJoinDeliveryProviceAndMemberDelivery",
  getJoinDeliveryProviceAndMemberDelivery
);

app.post(api + "/portDeliveryInProvice", portDeliveryInProvice);

app.put(api + "/putStatusDeliveryProvice", putStatusDeliveryProvice);
//--------------------------------------------------------
app.post(api + "/portDeliveryDetailInProvice", portDeliveryDetailInProvice);
app.get(
  api + "/getDeliveryDetailByDeliveryID/:id",
  getDeliveryDetailByDeliveryID
);
//-------------------------------------------------------------
app.post(api + "/postRiderOrderExpress", postRiderOrderExpress);
app.get(api + "/getAllRiderOrder", getAllRiderOrder);
app.get(api + "/getAllOrderExpressJoinRider", getAllOrderExpressJoinRider);
app.put(api + "/putStatusOrderRider", putStatusOrderRider);
//----------------------------------------------------------------
app.post(api + "/postStockProductMember", postStockProductMember);

app.get(
  api + "/getStockProductMemberByUserID/:id",
  getStockProductMemberByUserID
);

app.put(api + "/putAmountStockProductMember", putAmountStockProductMember);

app.get(api + "/getStockMemberJoinProduct", getStockMemberJoinProduct);
//---------------------------------------------------------------------------
app.get(api + "/getAllWallet", getAllWallet);

app.post(api + "/postWallet", postWallet);

app.get(api + "/getWalletById/:id", getWalletById);

app.put(api + "/putSlipWallet", putSlipWallet);

app.put(api + "/putWalletTotal", putWalletTotal);

app.get(api + "/getJoinWalletMember", getJoinWalletMember);
//----------------------------------------------------------------------
app.post(api + "/loginAdmin", loginAdmin);

app.get(api + "/getAllAdmin", getAllAdmin);

app.delete(api + "/deleteAdmin/:id", deleteAdmin);

app.get(api + "/getAdminByAutoID/:id", getAdminByAutoID);

app.post(api + "/postAdmin", postAdmin);

app.put(api + "/putAdmin", putAdmin);
//---------------------------------------------------------------------
app.post(api + "/postPercentOrderDetail", postPercentOrderDetail);

app.get(api + "/getJoin_order_detail_member", getJoin_order_detail_member);
//----------------------------------------------------------------------
app.post(api + "/postWalletMember", postWalletMember);

app.get(api + "/getWalletMemberById/:id", getWalletMemberById);

app.get(api + "/getAllWalletMember", getAllWalletMember);

app.put(api + "/putWalletMemberTotal", putWalletMemberTotal);

app.get(api + "/getWalletJoinMembers", getWalletJoinMembers);
//----------------------------------------------------------------------
app.post(api + "/portReportWalletMember", portReportWalletMember);

app.get(api + "/getReportWalletJoinMembers", getReportWalletJoinMembers);

app.put(api + "/putSlipWalletMember", putSlipWalletMember);

//------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log("Node App is running on port =", PORT);
});

module.exports = app;
