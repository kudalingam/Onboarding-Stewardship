import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import MyTimeSheet from "./MyTimeSheet";
import NewTimeSheet from "./NewTimeSheet";

const TimeSheet = ({ authvar }) => {
  const { url, path } = useRouteMatch();
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
          <Sidebar active={"Time Sheet"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>TimeOff</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              <Link
                to={`${url}`}
                className="col-3 p-2 rounded bg-info cursor text-center link1"
              >
                <div>My Requests</div>
              </Link>
              <Link
                to={`${url}/NewTimeSheet`}
                className="col-3 p-2 rounded bg-info cursor text-center link1"
              >
                <div>New Request</div>
              </Link>
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              <Route exact path={path}>
                <MyTimeSheet authvar={authvar} />
              </Route>
              <Route path={`${path}/NewTimeSheet`}>
                <NewTimeSheet authvar={authvar} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSheet;
