const { connection } = require("../config/dbConfig");
// get Sent
const getLearnings = (req, res) => {
  let RequesterId = req.params.id;
  let data = [RequesterId];
  connection.query(
    "SELECT learnings.Learnings_id,Learnings.Requester_id,learnings.Approver_id,user.Name AS 'Approver_Name',user.Type AS 'Approver_Type',learnings.Start_date,learnings.End_date,learnings.Status,learnings.course_name,learnings.Course_Subject,learnings.Comments FROM learnings INNER JOIN user ON learnings.Approver_id = user.User_id WHERE learnings.Requester_id=?",
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
const getApproveList = (req, res) => {
  console.log(req.params);
  let ApproverId = req.params.id;
  let data = [ApproverId];

  // Name,startdate,enddate,coursename,csub
  connection.query(
    "SELECT learnings.Learnings_id,Learnings.Requester_id,learnings.Approver_id,user.Name AS 'Requester_Name',user.Type AS 'Requester_Type',learnings.Start_date,learnings.End_date,learnings.Status AS 'status',learnings.course_name,learnings.Course_Subject,learnings.Comments FROM `learnings` INNER JOIN `user` ON learnings.Requester_id=user.User_id WHERE `Approver_id`=? AND `Status`='Submitted';",
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
const getHR = (req, res) => {
  let data;
  req.params.type === "Employee" ? (data = "HR") : (data = "Ceo");
  connection.query(
    "SELECT User_id,	Email_id,Name,Type  FROM `user` WHERE Type=?",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
      } else {
        console.log("not");
        res.json({ message: "Not Matched" });
      }
    }
  );
};
// postLearnings
const postLearnings = (req, res) => {
  let Requester_id = req.body.Requester_id;
  let Approver_id = req.body.Approver_id;
  let Start_date = req.body.start_Date;
  let End_date = req.body.end_Date;
  let Status = req.body.status;
  let course_name = req.body.courseName;
  let Course_Subject = req.body.courseSubject;
  let data = [
    Requester_id,
    Approver_id,
    Start_date,
    End_date,
    Status,
    course_name,
    Course_Subject,
  ];
  connection.query(
    "INSERT INTO `learnings`(`Requester_id`,`Approver_id`, `Start_date`, `End_date`, `Status`, `course_name`, `Course_Subject`) VALUES (?,?,?,?,?,?,?)",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        res.status(200).json({
          message: "Sucessfully Created",
        });
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};
// postLearnings
const putLearnings = (req, res) => {
  console.log("REQUEST BODY", req.body);
  let Requester_id = req.body.Requester_id;
  let Approver_id = req.body.Approver_id;
  let Start_date = req.body.Start_date;
  let End_date = req.body.End_date;
  let ReqStatus = req.body.ReqStatus;
  let course_name = req.body.course_name;
  let Course_Subject = req.body.Course_Subject;
  let ReqComments = req.body.ReqComments;
  let Learnings_id = req.body.Learnings_id;
  let data = [
    Requester_id,
    Approver_id,
    Start_date,
    End_date,
    ReqStatus,
    course_name,
    Course_Subject,
    ReqComments,
    Learnings_id,
  ];
  connection.query(
    "UPDATE `learnings` SET `Requester_id`=?,`Approver_id`=?,`Start_date`=?,`End_date`=?,`Status`=?,`course_name`=?,`Course_Subject`=?,`Comments`=? WHERE `Learnings_id`=?",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        res.json({ message: "Sucessfully Updated" });
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};

// deleteLearings
const deleteLearings = (req, res) => {
  let Learnings_id = req.body.Learnings_id;
  let data = [Learnings_id];
  connection.query(
    "DELETE FROM `learnings` WHERE `Learnings_id`=?",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.affectedRows >= 1) {
        res.json({ message: "Sucessfully Deleted" });
      } else {
        res.json({ message: "Not Matched" });
      }
    }
  );
};

module.exports = {
  getLearnings,
  postLearnings,
  putLearnings,
  deleteLearings,
  getHR,
  getApproveList,
};
