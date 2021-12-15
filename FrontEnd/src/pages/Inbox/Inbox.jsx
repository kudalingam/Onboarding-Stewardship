import {
  // BrowserRouter as Router,
  Link,
  useRouteMatch,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Sent from "./Sent";
import Received from "./Received";
import Compose from "./Compose";

const Performance = ({ authvar }) => {
  const { url, path } = useRouteMatch();
  const user_type = sessionStorage.getItem("user_type");
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
          <Sidebar active={"Inbox"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>Inbox</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              <Link
                to={`${url}`}
                className="col-3 p-2 rounded bg-info cursor text-center link1"
              >
                <div>Received</div>
              </Link>
              {user_type !== "Job" && (
                <Link
                  to={`${url}/Sent`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>Sent</div>
                </Link>
              )}
              {user_type !== "Job" && (
                <Link
                  to={`${url}/Compose`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>Compose</div>
                </Link>
              )}
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              <Route exact path={path}>
                <Received authvar={authvar} />
              </Route>
              <Route path={`${path}/Sent`}>
                <Sent authvar={authvar} />
              </Route>
              <Route path={`${path}/Compose`}>
                <Compose authvar={authvar} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
