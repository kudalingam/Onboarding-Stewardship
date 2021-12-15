import { useState } from "react";
import "./App.css";
import "./pages/Quiz/styles/base.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Inbox,
  Dashboard,
  Learnings,
  LoginPage,
  Profile,
  Reports,
  TimeOff,
  TimeSheet,
  Strategy,
  Performance,
  Teams,
  QuizInstructions,
  Play,
  QuizSummary,
  TechInstructions,
  TechPlay,
  TechSummary,
  Schedule,
} from "./pages/PageExport.js";

const App = () => {
  const [auth, setauth] = useState(false);
  const False = false;
  if (False) {
    console.log(auth);
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <LoginPage auth={setauth} />} />
        <Route
          path="/Dashboard"
          component={() => (
            <Dashboard authvar={sessionStorage.getItem("auth")} />
          )}
        />
        <Route
          path="/Inbox"
          component={() => <Inbox authvar={sessionStorage.getItem("auth")} />}
        />
        <Route
          path="/Teams"
          component={() => <Teams authvar={sessionStorage.getItem("auth")} />}
        />
        <Route
          path="/Learnings"
          component={() => (
            <Learnings authvar={sessionStorage.getItem("auth")} />
          )}
        />
        <Route
          path="/Performance"
          component={() => (
            <Performance authvar={sessionStorage.getItem("auth")} />
          )}
        />
        <Route
          path="/TimeOff"
          component={() => <TimeOff authvar={sessionStorage.getItem("auth")} />}
        />
        <Route
          path="/TimeSheet"
          component={() => (
            <TimeSheet authvar={sessionStorage.getItem("auth")} />
          )}
        />
        <Route
          path="/Profile"
          component={() => <Profile authvar={sessionStorage.getItem("auth")} />}
        />
        <Route
          path="/Reports"
          component={() => <Reports authvar={sessionStorage.getItem("auth")} />}
        />
        <Route
          path="/Strategy"
          component={() => (
            <Strategy authvar={sessionStorage.getItem("auth")} />
          )}
        />
        {/* <Route
          path="/play/instructions"
          exact
          component={() => (
            <QuizInstructions authvar={sessionStorage.getItem("auth")} />
          )}
        />
        <Route
          path="/play/quiz"
          exact
          component={() => <Play authvar={sessionStorage.getItem("auth")} />}
        />
        <Route path="/play/quizSummary" exact component={QuizSummary} /> */}
        <Route
          path="/Schedule"
          exact
          component={() => (
            <Schedule authvar={sessionStorage.getItem("auth")} />
          )}
        />
        <Route
          path="/aptitude/instructions"
          exact
          component={QuizInstructions}
        />
        <Route path="/play/aptitude" exact component={Play} />
        <Route path="/play/aptitudeSummary" exact component={QuizSummary} />
        <Route
          path="/technical/instructions"
          exact
          component={TechInstructions}
        />
        <Route path="/play/technical" exact component={TechPlay} />
        <Route path="/play/technicalSummary" exact component={TechSummary} />
        <Route path="*">
          <h1>404 Not found</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
