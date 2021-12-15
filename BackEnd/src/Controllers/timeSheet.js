const { connection } = require("../config/dbConfig");
// Get Performance
const gettimeSheet = (req, res) => {
  let User_id = req.params.id;
  connection.query(
    "SELECT * FROM `time_sheet` WHERE User_id=?",
    [User_id],
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
// Post Performance
const posttimeSheet = (req, res) => {
  let User_id = req.body.User_id;
  let Total_days_of_work = req.body.Total_days_of_work;
  let Total_days_of_leave = req.body.Total_days_of_leave;
  let MonthYear = req.body.MonthYear;
  let data = [User_id, Total_days_of_work, Total_days_of_leave, MonthYear];
  connection.query(
    "INSERT INTO `time_sheet`(`User_id`, `Total_days_of_work`, `Total_days_of_leave`, `MonthYear`) VALUES (?,?,?,?)",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        res.json({ message: "Sucessfully Created" });
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
// Put Performance
const puttimeSheet = (req, res) => {
  let User_id = req.body.User_id;
  let Total_days_of_work = req.body.Total_days_of_work;
  let Total_days_of_leave = req.body.Total_days_of_leave;
  let Month = req.body.Month;
  let Year = req.body.Year;
  let Status = req.body.Status;
  let Comments = req.body.Comments;
  let Sheet_id = req.body.Sheet_id;
  let data = [
    User_id,
    Total_days_of_work,
    Total_days_of_leave,
    Month,
    Year,
    Status,
    Comments,
    Sheet_id,
  ];
  connection.query(
    "UPDATE `time_sheet` SET `User_id`=?,`Total_days_of_work`=?,`Total_days_of_leave`=?,`Month`=?,`Year`=?,`Status`=?,`Comments`=? WHERE `Sheet_id`=?",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        res.status(200).json({
          message: "Sucessfully Updated",
        });
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
// Delete Performance
const deletetimeSheet = (req, res) => {
  let User_id = req.body.User_id;
  let data = [User_id];
  connection.query(
    "DELETE FROM `time_sheet` WHERE `User_id`=?",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        res.status(200).json({
          message: "Sucessfully Deleted",
        });
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
module.exports = {
  gettimeSheet,
  posttimeSheet,
  puttimeSheet,
  deletetimeSheet,
};
