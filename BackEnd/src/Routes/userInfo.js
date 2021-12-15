// Express
var express = require("express");
var router = express.Router();
const {
  getuserInfo,
  postUserInfo,
  putUserInfo,
  deleteUserInfo,
} = require("../Controllers/userInfo");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/", (req, res) => getuserInfo(req, res))
  .get("/all", (req, res) => getAllUserInfo(req, res))
  .post("/", (req, res) => postUserInfo(req, res))
  .put("/", (req, res) => putUserInfo(req, res))
  .delete("/", (req, res) => deleteUserInfo(req, res));

module.exports = router;
