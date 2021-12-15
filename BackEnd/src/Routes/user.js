// Express
var express = require("express");
var router = express.Router();
const {
  getuser,
  getAllUser,
  postUser,
  putUser,
  deleteUser,
  getUser1,
  getAllHR,
  getAllManager,
  getAllEmployee,
} = require("../Controllers/user");

/****************************************************
 *******************ROUTES***************************
 ****************************************************/
router
  .post("/get", (req, res) => getuser(req, res))
  .get("/all/:id", (req, res) => getAllUser(req, res))
  .get("/allHR", (req, res) => getAllHR(req, res))
  .get("/allManager", (req, res) => getAllManager(req, res))
  .get("/allEmployee", (req, res) => getAllEmployee(req, res))
  .get("/:id", (req, res) => getUser1(req, res))
  .post("/", (req, res) => postUser(req, res))
  .put("/Update/:id", (req, res) => putUser(req, res))
  .delete("/", (req, res) => deleteUser(req, res));

module.exports = router;
