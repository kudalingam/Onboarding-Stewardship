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
import "../../Components/Css/style.css";
import MyRequest from "./MyRequest";
import NewLearn from "./NewLearn";
import ApproveLearn from "./ApproveLearn";
const Learnings = ({ authvar }) => {
  let { url, path } = useRouteMatch();
  let user_type = sessionStorage.getItem("user_type");
  const ceodefault = user_type !== "Ceo" ? `${path}/ApproveLearn` : `/`;
  const ceodefault2 = user_type !== "Ceo" ? path : `/Myrequest`;
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
          <Sidebar active={"Learnings"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>Learnings</h3>
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
                  to={`${url}/NewLearn`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>New Request</div>
                </Link>
              )}
              {user_type !== "Employee" && (
                <Link
                  to={`${url}/ApproveLearn`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>Approve Requests</div>
                </Link>
              )}
            </div>
          </div>

          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              <Route exact path={ceodefault2}>
                <MyRequest authvar={authvar} />
              </Route>
              <Route path={`${path}/NewLearn`}>
                <NewLearn authvar={authvar} />
              </Route>
              <Route path={ceodefault}>
                <ApproveLearn authvar={authvar} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learnings;
