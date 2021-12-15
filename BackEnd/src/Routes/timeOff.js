// Express
var express = require("express");
var router = express.Router();
const {
  gettimeOff,
  posttimeOff,
  puttimeOff,
  deletetimeOff,
  getApproveList,
  getApprover,
} = require("../Controllers/timeOff");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/:id", (req, res) => gettimeOff(req, res))
  .get("/Approve/:id", (req, res) => getApproveList(req, res))
  .post("/", (req, res) => posttimeOff(req, res))
  .put("/", (req, res) => puttimeOff(req, res))
  .delete("/", (req, res) => deletetimeOff(req, res))
  .get("/getApprover/:type", (req, res) => getApprover(req, res));

module.exports = router;
