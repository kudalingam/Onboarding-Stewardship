const { connection } = require("../config/dbConfig");
// Get Performance
const gettimeOff = (req, res) => {
  let requester_id = req.params.id;
  connection.query(
    "SELECT time_off.timeoff_id,time_off.approver_id,user.Name As 'Approver_Name',user.Type As 'Approver_Type',time_off.requester_id,time_off.start_date,time_off.end_date,time_off.status,time_off.type_leave,time_off.leave_subject,time_off.comments FROM `time_off` INNER JOIN `user` ON time_off.approver_id=user.User_id WHERE requester_id=?",
    [requester_id],
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
const getApproveList = (req, res) => {
  // console.log(req.params);
  let ApproverId = req.params.id;
  let data = [ApproverId];

  // Name,startdate,enddate,coursename,csub
  connection.query(
    "SELECT time_off.timeoff_id,time_off.requester_id,time_off.approver_id,user.Name AS 'Requester_Name',user.Type AS 'Requester_Type',time_off.start_date,time_off.end_date,time_off.status AS 'status',time_off.type_leave,time_off.leave_subject,time_off.comments FROM `time_off` INNER JOIN `user` ON time_off.requester_id=user.User_id WHERE `approver_id`=? AND `status`='Submitted';",
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
const getApprover = (req, res) => {
  let data;
  req.params.type === "Employee" ? (data = "HR") : (data = "Ceo");
  connection.query(
    "SELECT User_id,Email_id,Name,Type  FROM `user` WHERE Type=?",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
        console.log("Approver list", results);
      } else {
        console.log("not");
        res.json({ message: "Not Matched" });
      }
    }
  );
};
// Post Performance
const posttimeOff = (req, res) => {
  let approver_id = req.body.Approver_id;
  let requester_id = req.body.Requester_id;
  let start_date = req.body.start_Date;
  let end_date = req.body.end_Date;
  let status = req.body.status;
  let type_leave = req.body.leaveType;
  let leave_subject = req.body.leaveSubject;
  let data = [
    approver_id,
    requester_id,
    start_date,
    end_date,
    status,
    type_leave,
    leave_subject,
  ];
  connection.query(
    "INSERT INTO `time_off`(`approver_id`, `requester_id`, `start_date`, `end_date`, `status`, `type_leave`, `leave_subject`) VALUES (?,?,?,?,?,?,?)",
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
const puttimeOff = (req, res) => {
  let approver_id = req.body.approver_id;
  let requester_id = req.body.requester_id;
  let start_date = req.body.start_date;
  let end_date = req.body.end_date;
  let status = req.body.ReqStatus;
  let type_leave = req.body.type_leave;
  let leave_subject = req.body.leave_subject;
  let comments = req.body.ReqComments;
  let timeoff_id = req.body.timeoff_id;
  /*
  
      approver_id,
    comments,
    type_leave,
    end_date,
    timeoff_id,
    Requester_Name,
    Requester_Type,
    Requester_id,
    start_date,
    status,
    leave_subject,
  */
  let data = [
    approver_id,
    requester_id,
    start_date,
    end_date,
    status,
    type_leave,
    leave_subject,
    comments,
    timeoff_id,
  ];
  connection.query(
    "UPDATE `time_off` SET `approver_id`=?,`requester_id`=?,`start_date`=?,`end_date`=?,`status`=?,`type_leave`=?,`leave_subject`=?,`comments`=? WHERE `timeoff_id`=?",
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
const deletetimeOff = (req, res) => {
  let timeoff_id = req.body.timeoff_id;
  let data = [timeoff_id];
  connection.query(
    "DELETE FROM `time_off` WHERE `timeoff_id`=?",
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
  gettimeOff,
  posttimeOff,
  puttimeOff,
  deletetimeOff,
  getApprover,
  getApproveList,
};
