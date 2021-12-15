import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Aptitude from "./Aptitude";
import Technical from "./Technical";

const Strategy = ({ authvar }) => {
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
          <Sidebar active={"Strategy"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>Strategy</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              <Link
                to={`${url}`}
                className="col-3 p-2 rounded bg-info cursor text-center link1"
              >
                <div>Aptitude</div>
              </Link>
              <Link
                to={`${url}/Technical`}
                className="col-3 p-2 rounded bg-info cursor text-center link1"
              >
                <div>Technical</div>
              </Link>
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              <Route exact path={path}>
                <Aptitude authvar={authvar} />
              </Route>
              <Route path={`${path}/Technical`}>
                <Technical authvar={authvar} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategy;
