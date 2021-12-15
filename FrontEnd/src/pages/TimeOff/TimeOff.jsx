// import React from "react";
import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
// import Status from "../../Components/Status";
import ApproveTimeoff from "./ApproveTimeoff";
import MyTimeoff from "./MyTimeoff";
import NewTimeoff from "./NewTimeoff";

const TimeOff = ({ authvar }) => {
  const { url, path } = useRouteMatch();
  const user_type = sessionStorage.getItem("user_type");
  const ceodefault = user_type !== "Ceo" ? `${path}/ApproveTimeOff` : `/`;
  const ceodefault2 = user_type !== "Ceo" ? path : `/MyTimeoff`;
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Navbar />
      <div className="row learn">
        <div
          style={{ backgroundColor: "#15a2fa" }}
          className="col-3 learn-left d-flex align-items-center justify-content-center"
        >
          <Sidebar active={"Timeoff"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>TimeOff</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              {user_type !== "Ceo" && (
                <Link
                  to={`${url}`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>My Requests</div>
                </Link>
              )}
              {user_type !== "Ceo" && (
                <Link
                  to={`${url}/NewTimeOff`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>New Request</div>
                </Link>
              )}
              {user_type !== "Employee" ? (
                <Link
                  to={`${url}/ApproveTimeOff`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>Approve Requests</div>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              <Route exact path={ceodefault2}>
                <MyTimeoff authvar={authvar} />
              </Route>
              <Route path={`${path}/NewTimeOff`}>
                <NewTimeoff authvar={authvar} />
              </Route>
              <Route path={ceodefault}>
                <ApproveTimeoff authvar={authvar} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeOff;
