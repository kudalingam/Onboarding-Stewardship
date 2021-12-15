// Express
var express = require("express");
var router = express.Router();
const {
  getSchedule,
  postSchedule,
  putSchedule,
  deleteSchedule,
} = require("../Controllers/schedule");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .get("/:id", (req, res) => getSchedule(req, res))
  .post("/", (req, res) => postSchedule(req, res))
  .put("/", (req, res) => putSchedule(req, res))
  .delete("/delete/:id", (req, res) => deleteSchedule(req, res));

module.exports = router;
