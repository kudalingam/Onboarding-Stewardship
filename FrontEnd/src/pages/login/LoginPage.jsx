import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Avatar from "./img/avatar.svg";
import image from "./img/Secure login-rafiki.svg";
import "./style.css";
const LoginPage = ({ auth, authvar }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [type, settype] = useState("");
  const [message, setmessage] = useState("");

  let history = useHistory();
  const handeleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:4000/user/get", {
        email,
        password,
        type,
      });
      if (response.status === 200) {
        sessionStorage.setItem("user_id", response.data[0].User_id);
        sessionStorage.setItem("user_type", response.data[0].Type);
        sessionStorage.setItem("auth", "true");
        auth(true);
        history.push("/dashboard");
      }
      if (response.status === 203) {
        setmessage(response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {message && (
        <>
          <div
            className="alert alert-danger alert-dismissible fade show text-center"
            role="alert"
          >
            {message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      )}
      <div className="container-fluid1">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={(e) => handeleSubmit(e)}>
              <img
                src={Avatar}
                className="mb-4"
                width="100"
                height="100"
                alt="avatar"
              />
              <h5>
                <span
                  style={{ color: "#d73a95" }}
                  className="vtab-brand fw-bold"
                >
                  V{"  "}
                </span>
                <span
                  style={{ color: "#7aab40" }}
                  className="vtab-brand fw-bold"
                >
                  TAB{"   "}
                </span>
                <span
                  style={{ color: "#3e6ab6" }}
                  className="vtab-brand fw-bold"
                >
                  SQUARE
                </span>
              </h5>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <div>
                <select
                  className="input-field text-center"
                  selected
                  value={type}
                  onChange={(e) => settype(e.target.value)}
                  required
                >
                  <option value="">None</option>
                  <option value="Ceo">CEO</option>
                  <option value="Manager">Manager</option>
                  <option value="HR">HR</option>
                  <option value="Payroll">Payroll</option>
                  <option value="Employee">Employee</option>
                  <option value="Job">Job</option>
                </select>
              </div>
              <a href="123" className="forget-link">
                Forget Password?
              </a>

              <input
                type="submit"
                value="Login"
                name="login"
                className="btn-solid"
              />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <img src={image} className="image" alt="panel img" />
          </div>
        </div>
      </div>

      {/* <Email /> */}
    </>
  );
};

export default LoginPage;
