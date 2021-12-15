const { connection } = require("../config/dbConfig");
const postaptitude = (req, res) => {
  let User_id = req.body.user_id;
  let numberOfQuestions = req.body.numberOfQuestions;
  let numberOfAnsweredQuestions = req.body.numberOfAnsweredQuestions;
  let correctAnswers = req.body.correctAnswers;
  let wrongAnswers = req.body.wrongAnswers;
  let Score = req.body.Score;
  let data = [
    User_id,
    Score,
    numberOfQuestions,
    numberOfAnsweredQuestions,
    correctAnswers,
    wrongAnswers,
  ];
  console.log(data);
  connection.query(
    "INSERT INTO `aptitude`(`User_id`,`Score`,`No_of_Questions`,`No_of_Answered`,`No_of_Correct`,`No_of_Wrong`) VALUES (?,?,?,?,?,?)",
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
const posttechnical = (req, res) => {
  let User_id = req.body.user_id;
  let numberOfQuestions = req.body.numberOfQuestions;
  let numberOfAnsweredQuestions = req.body.numberOfAnsweredQuestions;
  let correctAnswers = req.body.correctAnswers;
  let wrongAnswers = req.body.wrongAnswers;
  let Score = req.body.Score;
  let data = [
    User_id,
    Score,
    numberOfQuestions,
    numberOfAnsweredQuestions,
    correctAnswers,
    wrongAnswers,
  ];
  console.log(data);
  connection.query(
    "INSERT INTO `technical`(`User_id`,`Score`,`No_of_Questions`,`No_of_Answered`,`No_of_Correct`,`No_of_Wrong`) VALUES (?,?,?,?,?,?)",
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

// Get Aptitude
const getaptitude = (req, res) => {
  let User_id = req.params.id;
  connection.query(
    "SELECT * FROM `aptitude` WHERE User_id=?",
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

// Get Aptitude
const gettechnical = (req, res) => {
  let User_id = req.params.id;
  connection.query(
    "SELECT * FROM `technical` WHERE User_id=?",
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

module.exports = {
  postaptitude,
  posttechnical,
  getaptitude,
  gettechnical,
};
