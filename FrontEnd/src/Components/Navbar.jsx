import { useHistory } from "react-router";
import icon from "../images/favicon.ico";
import "./Css/style.css";

const Navbar = () => {
  let history = useHistory();
  const logouthandeler = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("user_type");
    history.push("/");
  };
  const home = () => {
    history.push("/Dashboard");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top"
      style={{
        backgroundColor: "rgb(229, 229, 229)",
      }}
    >
      <div className="container-fluid">
        <div className="navbar-brand cursor" onClick={() => home()}>
          <img
            src={icon}
            alt="logo"
            width="40px"
            height="50px"
            className="me-2"
          />
          <span style={{ color: "#d73a95" }} className="vtab-brand fw-bold">
            V{"  "}
          </span>
          <span style={{ color: "#7aab40" }} className="vtab-brand fw-bold">
            TAB{"   "}
          </span>
          <span style={{ color: "#3e6ab6" }} className="vtab-brand fw-bold">
            {" "}
            SQUARE
          </span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div
              onClick={() => logouthandeler()}
              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                cursor: "pointer",
              }}
            >
              <span className="me-2">Logout</span>
              <i className="fas fa-sign-out-alt fa-2x" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
