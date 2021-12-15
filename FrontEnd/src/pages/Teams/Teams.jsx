import {
  // BrowserRouter as Router,
  Redirect,
  Link,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Employee from "./Employee";
import HR from "./HR";
import Manager from "./Manager";
import All from "./All";
const Teams = ({ authvar }) => {
  const { url, path } = useRouteMatch();
  const user_type = sessionStorage.getItem("user_type");
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <div className="row learn">
        <div
          style={{ backgroundColor: "#15a2fa" }}
          className="col-3 learn-left d-flex align-items-center justify-content-center"
        >
          <Sidebar active={"Teams"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>Teams</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              <Link
                to={`${url}`}
                className="col-2 p-2 rounded bg-info cursor text-center link1"
              >
                <div>All</div>
              </Link>
              <Link
                to={`${url}/manager`}
                className="col-2 p-2 rounded bg-info cursor text-center link1"
              >
                <div>Manager</div>
              </Link>
              <Link
                to={`${url}/HR`}
                className="col-2 p-2 rounded bg-info cursor text-center link1"
              >
                <div>HR</div>
              </Link>
              {user_type === "Ceo" && (
                <Link
                  to={`${url}/Employee`}
                  className="col-2 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>Employee</div>
                </Link>
              )}
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              <Route exact path={path}>
                <All />
              </Route>
              <Route path={`${path}/Manager`}>
                <Manager />
              </Route>
              <Route path={`${path}/HR`}>
                <HR />
              </Route>
              <Route path={`${path}/Employee`}>
                <Employee />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      {/* </Router> */}
    </>
  );
};

export default Teams;
