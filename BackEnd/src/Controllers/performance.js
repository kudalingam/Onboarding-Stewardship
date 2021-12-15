const { connection } = require("../config/dbConfig");
// Get Performance
const getPerformance = (req, res) => {
  let user_id = req.params.id;
  console.log("user_id ", user_id);
  connection.query(
    "SELECT performance.peff_id,performance.receiver_id,performance.assigner_id,user.Name As 'AssignerName',user.Type AS 'AssignerType',performance.goal,performance.objective,performance.status,performance.assigned_date,performance.due_date,performance.comments FROM `performance` INNER JOIN user ON performance.assigner_id=user.User_id WHERE receiver_id =?",
    [user_id],
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
// Get Receiver
const getReceiver = (req, res) => {
  let QueryString;
  req.params.type === "Ceo"
    ? (QueryString = "SELECT * FROM `user` WHERE Type='HR' OR Type='Manager'")
    : (QueryString = "SELECT * FROM user WHERE Type='Employee'");

  connection.query(QueryString, (error, results) => {
    if (error) {
      console.log("Error", error);
    } else if (results.length != 0) {
      res.json(results);
    } else {
      console.log("not");
      res.json({ message: "Not Matched" });
    }
  });
};
const getApproverList = (req, res) => {
  // console.log(req.params);
  let ApproverId = req.params.id;
  let data = [ApproverId];

  // Name,startdate,enddate,coursename,csub
  connection.query(
    "SELECT performance.peff_id,performance.receiver_id,performance.assigner_id,user.Name AS 'Requester_Name',user.Type AS 'Requester_Type',performance.due_date,performance.assigned_date,performance.status AS 'status',performance.goal,performance.objective,performance.comments FROM `performance` INNER JOIN `user` ON performance.receiver_id=user.User_id WHERE `assigner_id`=? AND `status`='Assigned';",
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
// Post Performance
const postPerformance = (req, res) => {
  let receiver_id = req.body.Receiver_id;
  let assigner_id = req.body.Assigner_id;
  let goal = req.body.goal;
  let objective = req.body.objective;
  let status = req.body.status;
  let assigned_date = req.body.assigned_date;
  let Due_date = req.body.Due_date;
  let comments = req.body.comments;
  // let manager_rating = req.body.manager_rating;
  // let emp_rating = req.body.emp_rating;
  let data = [
    receiver_id,
    assigner_id,
    goal,
    objective,
    status,
    assigned_date,
    Due_date,
    comments,
    // manager_rating,
    // emp_rating,
  ];
  connection.query(
    "INSERT INTO `performance`(`receiver_id`,`assigner_id`, `goal`, `objective`, `status`,`assigned_date`, `due_date`,`comments`) VALUES (?,?,?,?,?,?,?,?)",
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
const putPerformance = (req, res) => {
  let receiver_id = req.body.receiver_id;
  let assigner_id = req.body.assigner_id;
  let goal = req.body.goal;
  let objective = req.body.objective;
  let status = req.body.ReqStatus;
  let due_date = req.body.due_date;
  let comments = req.body.ReqComments;
  let peff_id = req.body.peff_id;
  let data = [
    receiver_id,
    assigner_id,
    goal,
    objective,
    status,
    due_date,
    comments,
    peff_id,
  ];
  connection.query(
    "UPDATE `performance` SET `receiver_id`=?,`assigner_id`=?,`goal`=?,`objective`=?,`status`=?,`due_date`=?,`comments`=? WHERE `peff_id`=?",
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
const deletePerformance = (req, res) => {
  let user_id = req.body.user_id;
  let data = [user_id];
  connection.query(
    "DELETE FROM `performance` WHERE `user_id`=?",
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
  getPerformance,
  postPerformance,
  putPerformance,
  deletePerformance,
  getReceiver,
  getApproverList,
};
