// Express
var express = require("express");
var router = express.Router();
const {
  getLearnings,
  postLearnings,
  putLearnings,
  deleteLearings,
  getHR,
  getApproveList,
} = require("../Controllers/learnings");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/:id", (req, res) => getLearnings(req, res))
  .get("/Approve/:id", (req, res) => getApproveList(req, res))
  .post("/", (req, res) => postLearnings(req, res))
  .put("/", (req, res) => putLearnings(req, res))
  .delete("/", (req, res) => deleteLearings(req, res))
  .get("/getApprover/:type", (req, res) => getHR(req, res));

module.exports = router;
