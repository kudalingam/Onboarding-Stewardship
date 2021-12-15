// Express
var express = require("express");
var router = express.Router();
const {
  gettimeSheet,
  posttimeSheet,
  puttimeSheet,
  deletetimeSheet,
} = require("../Controllers/timeSheet");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/:id", (req, res) => gettimeSheet(req, res))
  .post("/", (req, res) => posttimeSheet(req, res))
  .put("/", (req, res) => puttimeSheet(req, res))
  .delete("/", (req, res) => deletetimeSheet(req, res));

module.exports = router;
