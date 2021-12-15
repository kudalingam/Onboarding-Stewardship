const { connection } = require("../config/dbConfig");
// // get Sent
// const getSent = (req, res) => {
//   let sender_id = req.params.id;
//   let data = [sender_id];
//   connection.query(
//     "SELECT * FROM `inbox` WHERE `sender_id`=?",
//     data,
//     (error, results) => {
//       if (error) {
//         console.log("Error", error);
//       } else if (results.length != 0) {
//         res.json(results);
//       } else {
//         res.json({ message: "Not Matched" });
//       }
//     }
//   );
// };
// get Sent
const getUnreadMsg = (req, res) => {
  let userId = req.params.ID;
  let data = [userId];
  connection.query(
    "SELECT * FROM `inbox` WHERE `receiver_id`=? AND Status='Unread'",
    data,
    (error, results) => {
      if (error) {
        console.log("Error", error);
      } else if (results.length != 0) {
        res.json(results);
      } else {
        res.send([]);
        // res.json({ message: "No Messages" });
      }
    }
  );
};
// getReceived
const getReceived = (req, res) => {
  let receiver_id = req.params.id;
  let data = [receiver_id];
  console.log(data);
  connection.query(
    "SELECT inbox.message_id,inbox.sender_id,user.Name AS 'senderName',user.Type AS 'senderType',inbox.receiver_id,inbox.Subject,inbox.message,inbox.time,inbox.Status FROM `inbox` INNER JOIN user ON user.User_id=inbox.sender_id WHERE `receiver_id`=?",
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
// getsent
const getSent = (req, res) => {
  let sender_id = req.params.id;
  let data = [sender_id];
  connection.query(
    "SELECT inbox.message_id,inbox.receiver_id,user.Name AS 'receiverName',user.Type AS 'receiverType',inbox.sender_id,inbox.Subject,inbox.message,inbox.time,inbox.Status FROM `inbox` INNER JOIN user ON user.User_id=inbox.receiver_id WHERE `sender_id`=?",
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
// getsent
const senderList = (req, res) => {
  let user_id = req.params.id;
  let data = [user_id];
  connection.query(
    "SELECT * FROM `user` WHERE `User_id`!=?",
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
// Post Compose
const postCompose = (req, res) => {
  let sender_id = req.body.user_id;
  let receiver_id = req.body.Sender_id;
  let Subject = req.body.Subject;
  let message = req.body.Message;
  let Status = req.body.status;
  let data = [sender_id, receiver_id, Subject, message, Status];
  connection.query(
    "INSERT INTO `inbox`(`sender_id`, `receiver_id`,`Subject`, `message`,`Status`) VALUES (?,?,?,?,?)",
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
const putReceivedMsg = (req, res) => {
  let message_id = req.params.ID;
  let data = [message_id];
  connection.query(
    "UPDATE `inbox` SET `Status`='Read' WHERE `message_id`=?",
    data,
    (error, results) => {
      console.log("message id", message_id);
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
module.exports = {
  getSent,
  getUnreadMsg,
  getReceived,
  postCompose,
  putReceivedMsg,
  senderList,
};
