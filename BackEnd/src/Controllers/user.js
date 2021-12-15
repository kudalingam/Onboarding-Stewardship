const { connection } = require("../config/dbConfig");
// getUser
const getuser = (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  let type = req.body.type;

  connection.query(
    "SELECT * FROM `user` WHERE Email_id=? AND Password=? AND Type=?",
    [email, password, type],
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length > 0) {
        console.log(results);
        res.status(200).json(results);
      } else {
        res
          .status(203)
          .send({ error: "Check the Username/Password/Type of user" });
      }
    }
  );
};
//getAllUser
const getAllUser = (req, res) => {
  let userId = req.params.id;
  connection.query(
    "SELECT * FROM user INNER JOIN user_info ON user.User_id=user_info.User_id INNER JOIN bank_info on user.User_id=bank_info.User_ID WHERE user.User_id !=?",
    [userId],
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
        console.log(results);
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
//getAllUser
const getAllManager = (req, res) => {
  let userType = "Manager";
  connection.query(
    "SELECT * FROM user INNER JOIN user_info ON user.User_id=user_info.User_id INNER JOIN bank_info on user.User_id=bank_info.User_ID WHERE user.Type=?",
    [userType],
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
        console.log(results);
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
//getAllUser
const getAllEmployee = (req, res) => {
  let userType = "Employee";
  connection.query(
    "SELECT * FROM user INNER JOIN user_info ON user.User_id=user_info.User_id INNER JOIN bank_info on user.User_id=bank_info.User_ID WHERE user.Type=?",
    [userType],
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
        console.log(results);
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
//getAllUser
const getAllHR = (req, res) => {
  let userType = "HR";
  connection.query(
    "SELECT * FROM user INNER JOIN user_info ON user.User_id=user_info.User_id INNER JOIN bank_info on user.User_id=bank_info.User_ID WHERE user.Type=?",
    [userType],
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
        console.log(results);
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
//getUser
const getUser1 = (req, res) => {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM user INNER JOIN user_info ON user.User_id=user_info.User_id INNER JOIN bank_info on user.User_id=bank_info.User_ID WHERE user.User_id=?",
    [id],
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

// Post User
const postUser = (req, res) => {
  console.log("REQ BODY", req.body);
  let name = req.body.Name;
  let email = req.body.Email;
  let password = req.body.Password;
  let type = req.body.Type;
  let data = [email, name, password, type];
  connection.query(
    "INSERT INTO `user` (`Email_id`,`Name`,`Password`,`Type`) VALUES (?,?,?,?)",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        console.log("results.insertId", results.insertId);
        connection.query(
          "INSERT INTO `bank_info`(`User_ID`, `Bank_name`, `accountNumber`, `IFSC_Code`) VALUES (?,'','','');INSERT INTO `user_info`(`User_id`, `DOB`, `ph_no`, `Gender`, `Address`, `linkedin`, `github`) VALUES (?,'','','','','','')",
          [results.insertId, results.insertId],
          (error, result) => {
            if (error) throw error;
            console.log("result 0 .insertId", result[0].insertId);
            console.log("result 1.insertId", result[1].insertId);
            res.json({ message: "Sucessfully created !!!" });
          }
        );
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
// Put User
const putUser = (req, res) => {
  let User_id = req.params.id;
  let Email_id = req.body.Email_id;
  let Name = req.body.Name;
  let DOB = req.body.DOB;
  let ph_no = req.body.ph_no;
  let Gender = req.body.Gender;
  let Address = req.body.Address;
  let linkedin = req.body.linkedin;
  let github = req.body.github;
  let Aadhar = req.body.Aadhar;
  let Pan = req.body.Pan;
  let Bank_name = req.body.Bank_name;
  let accountNumber = req.body.accountNumber;
  let IFSC_Code = req.body.IFSC_Code;
  let data = [
    Email_id,
    Name,
    DOB,
    ph_no,
    Gender,
    Address,
    linkedin,
    github,
    Aadhar,
    Pan,
    Bank_name,
    accountNumber,
    IFSC_Code,
    User_id,
  ];
  connection.query(
    "UPDATE user INNER JOIN user_info ON user.User_id=user_info.User_id INNER JOIN bank_info ON bank_info.User_ID=user.User_id SET user.Email_id=?,user.Name=?,user_info.DOB=?,user_info.ph_no=?,user_info.Gender=?,user_info.Address=?,user_info.linkedin=?,user_info.github=?,user_info.Aadhar=?,user_info.Pan=?,bank_info.Bank_name=?,bank_info.accountNumber=?,bank_info.IFSC_Code=? WHERE user.User_id=?",
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

// Delete User
const deleteUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let data = [email, password];
  connection.query(
    "DELETE FROM `user` WHERE `Email_id`=? AND`Password`=?",
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
  getuser,
  getAllUser,
  postUser,
  putUser,
  deleteUser,
  getUser1,
  getAllHR,
  getAllManager,
  getAllEmployee,
};
