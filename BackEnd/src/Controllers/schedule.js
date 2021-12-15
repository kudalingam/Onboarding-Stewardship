const { connection } = require("../config/dbConfig");
// get Bank
const getSchedule = (req, res) => {
  let userId = req.params.id;
  let data = [userId];
  connection.query(
    "SELECT * FROM `schedule` WHERE User_id= ?",
    data,
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
// Post  Bank
const postSchedule = (req, res) => {
  let userId = req.body.userId;
  let Bank_name = req.body.Bank_name;
  let acc_no = req.body.acc_no;
  let IFSC_Code = req.body.IFSC_Code;
  let data = [userId, Bank_name, acc_no, IFSC_Code];
  connection.query(
    "INSERT INTO `schedule` (`User_Id`,`Bank_name`,`acc_no​`,`IFSC_Code`) VALUES (?,?,?,?)",
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
// Put  Bank
const putSchedule = (req, res) => {
  let userId = req.body.userId;
  let Bank_name = req.body.Bank_name;
  let acc_no = req.body.acc_no;
  let IFSC_Code = req.body.IFSC_Code;
  let Bank_id = req.body.Bank_id;
  let data = [userId, Bank_name, acc_no, IFSC_Code, Bank_id];
  connection.query(
    "UPDATE `schedule` SET `User_Id`=?,`Bank_name`=?,`acc_no​`=?,`IFSC_Code`=? WHERE `schedule_id`=?",
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
// Delete  Schedule
const deleteSchedule = (req, res) => {
  let userId = req.params.id;
  let data = [userId];
  connection.query(
    "DELETE FROM `schedule` WHERE `User_id`=?",
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
  getSchedule,
  postSchedule,
  putSchedule,
  deleteSchedule,
};
