import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import "../../styles/quiz-summary.css";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      // hintsUsed: 0,
      // fiftyFiftyUsed: 0,
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        // hintsUsed: state.hintsUsed,
        // fiftyFiftyUsed: state.fiftyFiftyUsed,
      });
    }
  }

  render() {
    const { state } = this.props.location;
    let stats, remark;
    const userScore = this.state.score;

    if (userScore <= 30) {
      remark = "You need more practice!";
    } else if (userScore > 30 && userScore <= 50) {
      remark = "Better luck next time!";
    } else if (userScore <= 70 && userScore > 50) {
      remark = "You can do better!";
    } else if (userScore >= 71 && userScore <= 84) {
      remark = "You did great!";
    } else {
      remark = "You're an absolute genius!";
    }

    if (state !== undefined) {
      stats = (
        <>
          <div style={{ textAlign: "center" }}>
            <i
              style={{ color: "green" }}
              class="far fa-check-circle fa-5x mb-5"
            />
          </div>
          <h1>Technical Round has ended</h1>
          <div className="left" style={{}}>
            <h2 style={{ marginLeft: "15%" }}>
              Score: {this.state.score.toFixed(0)}&#37;
            </h2>
            <Chart
              style={{ float: "start" }}
              width={"600px"}
              height={"500px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["No Of Questions", "Score"],
                ["", this.state.correctAnswers],
                ["", this.state.wrongAnswers],
              ]}
              options={{
                // title: "Test Score"
                legend: "none",
                pieStartAngle: 0,
                // pieSliceText: "label",
                is3D: true,
                slices: {
                  0: { color: "#57b846", offset: 0.0 },
                  1: { color: "red", offset: 0.0 },
                },
              }}
            />
          </div>
          <div
            style={{ marginTop: "-35%" }}
            className="float-end right container stats"
          >
            <h4>{remark}</h4>
            <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
            <span className="stat left">Total number of questions: </span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Number of attempted questions: </span>
            <span className="right">
              {this.state.numberOfAnsweredQuestions}
            </span>
            <br />
            <span className="stat left">Number of Correct Answers: </span>
            <span className="right">{this.state.correctAnswers}</span> <br />
            <span className="stat left">Number of Wrong Answers: </span>
            <span className="right">{this.state.wrongAnswers}</span>
            <br />
            {/* <span className="stat left">Hints Used: </span>
            <span className="right">{this.state.hintsUsed}</span>
            <br />
            <span className="stat left">50-50 Used: </span>
            <span className="right">{this.state.fiftyFiftyUsed}</span> */}
            <section>
              <ul>
                <li>
                  <Link to="/play/technical">Play Again</Link>
                </li>
                <li>
                  <Link to="/Dashboard">Back to Home</Link>
                </li>
              </ul>
            </section>
          </div>
        </>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link to="/play/technical">Take a Quiz</Link>
            </li>
            <li>
              <Link to="/Dashboard">Back to Home</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <>
        <div className="quiz-summary mt-5">{stats}</div>
      </>
    );
  }
}

export default QuizSummary;
