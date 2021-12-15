const express = require("express");
var cors = require("cors");
const app = express();
const user = require("./src/Routes/user");
const userInfo = require("./src/Routes/userInfo");
const bank = require("./src/Routes/bank");
const inbox = require("./src/Routes/inbox");
const learnings = require("./src/Routes/learnings");
const performance = require("./src/Routes/performance");
const timeOff = require("./src/Routes/timeOff");
const timeSheet = require("./src/Routes/timeSheet");
const schedule = require("./src/Routes/schedule");
const test = require("./src/Routes/test");

// MIddleware
require("dotenv").config();
app.use(cors());

// For parsing application/json
app.use(express.json()); // for parsing application/json

// ROUTES
app.use("/user", user);
app.use("/userInfo", userInfo);
app.use("/bank", bank);
app.use("/inbox", inbox);
app.use("/learnings", learnings);
app.use("/performance", performance);
app.use("/timeOff", timeOff);
app.use("/timeSheet", timeSheet);
app.use("/schedule", schedule);
app.use("/test", test);
app.get("/test", (req, res) => {
  res.json("sucessfully deployed");
});
// App listening
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
