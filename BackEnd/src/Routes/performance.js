// Express
var express = require("express");
var router = express.Router();
const {
  getPerformance,
  postPerformance,
  putPerformance,
  deletePerformance,
  getReceiver,
  getApproverList,
} = require("../Controllers/performance");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/:id", (req, res) => getPerformance(req, res))
  .get("/Approve/:id", (req, res) => getApproverList(req, res))
  .post("/", (req, res) => postPerformance(req, res))
  .get("/getReceiver/:type", (req, res) => getReceiver(req, res))
  .put("/", (req, res) => putPerformance(req, res))
  .delete("/", (req, res) => deletePerformance(req, res));

module.exports = router;
