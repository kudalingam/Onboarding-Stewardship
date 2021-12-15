// Express
var express = require("express");
var router = express.Router();
const {
  getBank,
  postBank,
  putBank,
  deleteBank,
} = require("../Controllers/bank");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/", (req, res) => getBank(req, res))
  .post("/", (req, res) => postBank(req, res))
  .put("/", (req, res) => putBank(req, res))
  .delete("/", (req, res) => deleteBank(req, res));

module.exports = router;
