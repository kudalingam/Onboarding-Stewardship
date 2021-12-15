const { connection } = require("../config/dbConfig");
// UserInfo
const getuserInfo = (req, res) => {
  let userId = req.body.userId;
  connection.query(
    "SELECT * FROM `user_info` WHERE User_id=?",
    [userId],
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
// Post UserInfo
const postUserInfo = (req, res) => {
  let User_id = req.body.User_id;
  let DOB = req.body.DOB;
  let ph_no = req.body.ph_no;
  let Gender = req.body.Gender;
  let Address = req.body.Address;
  let linkedin = req.body.linkedin;
  let github = req.body.github;
  let data = [User_id, DOB, ph_no, Gender, Address, linkedin, github];
  connection.query(
    "INSERT INTO `user_info`(`User_id`, `DOB`, `ph_no`, `Gender`, `Address`, `linkedin`, `github`) VALUES (?,?,?,?,?,?,?)",
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
// Put UserInfo
const putUserInfo = (req, res) => {
  let User_id = req.body.User_id;
  let DOB = req.body.DOB;
  let ph_no = req.body.ph_no;
  let Gender = req.body.Gender;
  let Address = req.body.Address;
  let linkedin = req.body.linkedin;
  let github = req.body.github;
  let infoId = req.body.infoId;
  let data = [User_id, DOB, ph_no, Gender, Address, linkedin, github, infoId];
  connection.query(
    "UPDATE `user_info` SET `User_id`=?,`DOB`=?,`ph_no`=?,`Gender`=?,`Address`=?,`linkedin`=?,`github`=? WHERE `info_id`=?",
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
// Delete UserInfo
const deleteUserInfo = (req, res) => {
  let userId = req.body.userId;
  let data = [userId];
  connection.query(
    "DELETE FROM `user_info` WHERE `User_id`=?",
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
  getuserInfo,
  postUserInfo,
  putUserInfo,
  deleteUserInfo,
};
