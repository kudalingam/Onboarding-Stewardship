// Express
var express = require("express");
var router = express.Router();
const {
  postaptitude,
  posttechnical,
  getaptitude,
  gettechnical,
} = require("../Controllers/test");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .post("/aptitude/", (req, res) => postaptitude(req, res))
  .get("/aptitude/get/:id", (req, res) => getaptitude(req, res))
  .get("/technical/get/:id", (req, res) => gettechnical(req, res))
  .post("/technical/", (req, res) => posttechnical(req, res));

module.exports = router;
