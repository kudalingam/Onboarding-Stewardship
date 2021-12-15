import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import ApprovePerformance from "./ApprovePerformance";
import MyPerformance from "./MyPerformance";
import NewPerformance from "./NewPerformance";

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
          <Sidebar active={"Performance"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>Performance</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              {user_type !== "Ceo" && (
                <Link
                  to={`${url}`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>My Performance</div>
                </Link>
              )}
              {user_type !== "Employee" && (
                <Link
                  to={`${url}/NewPerformance`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>New Performance</div>
                </Link>
              )}
              {user_type !== "Employee" && (
                <Link
                  to={`${url}/ApprovePerformance`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>Approve Performance</div>
                </Link>
              )}
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              {user_type !== "Ceo" && (
                <Route exact path={path}>
                  <MyPerformance authvar={authvar} />
                </Route>
              )}
              {user_type === "Ceo" && (
                <Route exact path={path}>
                  <NewPerformance authvar={authvar} />
                </Route>
              )}

              <Route path={`${path}/NewPerformance`}>
                <NewPerformance authvar={authvar} />
              </Route>

              {user_type !== "Employee" && (
                <Route path={`${path}/ApprovePerformance`}>
                  <ApprovePerformance authvar={authvar} />
                </Route>
              )}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
