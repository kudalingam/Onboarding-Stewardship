// import React from "react";
import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
// import Status from "../../Components/Status";
import MyProfile from "./MyProfile";
import NewProfile from "./NewProfile";
import UpdateProfile from "./UpdateProfile";
const Profile = ({ authvar }) => {
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
          <Sidebar active={"Profile"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>Profile</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              <Link
                to={`${url}`}
                className="col-3 p-2 rounded bg-info cursor text-center link1"
              >
                <div>My Profile</div>
              </Link>
              <Link
                to={`${url}/UpdateProfile`}
                className="col-3 p-2 rounded bg-info cursor text-center link1"
              >
                <div>UpdateProfile</div>
              </Link>
              {user_type !== "Employee" && user_type !== "Job" ? (
                <Link
                  to={`${url}/NewProfile`}
                  className="col-3 p-2 rounded bg-info cursor text-center link1"
                >
                  <div>Create Profile</div>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="row" style={{ backgroundColor: "#e5e5e5" }}>
            <Switch>
              <Route exact path={path}>
                <MyProfile authvar={authvar} />
              </Route>
              <Route path={`${path}/NewProfile`}>
                <NewProfile authvar={authvar} />
              </Route>
              <Route path={`${path}/UpdateProfile`}>
                <UpdateProfile authvar={authvar} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
