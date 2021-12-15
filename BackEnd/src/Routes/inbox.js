// Express
var express = require("express");
var router = express.Router();
const {
  getSent,
  getUnreadMsg,
  getReceived,
  postCompose,
  putReceivedMsg,
  senderList,
} = require("../Controllers/inbox");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/sent/all/:id", (req, res) => getSent(req, res))
  .get("/received/:ID", (req, res) => getUnreadMsg(req, res))
  .get("/received/all/:id", (req, res) => getReceived(req, res))
  .get("/senderList/:id", (req, res) => senderList(req, res))
  .put("/received/:ID", (req, res) => putReceivedMsg(req, res))
  .post("/compose", (req, res) => postCompose(req, res));

module.exports = router;
