import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Welcome from "../../Components/Welcome";
import Inbox from "../../Components/Inbox";
import { Ceo, Employee, Manager, HR, Job, Payroll } from "./User";
import "./Dashboard.css";
const Dashboard = ({ authvar }) => {
  const [userName, setuserName] = useState("");
  const [userType, setuserType] = useState("");
  const [applicationCount, setapplicationCount] = useState(0);
  let userId = sessionStorage.getItem("user_id");
  useEffect(() => {
    async function getUser1() {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/${userId}`
        );
        if (response.status === 200) {
          console.log("dashboard res", response.data);
          setuserName(response.data[0].Name);
          setuserType(response.data[0].Type);
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (userId) {
      getUser1();
    }
  }, [userId]);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  userId = parseInt(userId);

  return (
    <>
      <Navbar />
      <div className="parent-div px-5">
        <div className="bgColor"></div>
        <div className="containter mx-5 mt-5 ">
          {/* userName */}
          <Welcome userId={userId} userName={userName} />
          {/* Menu */}
          <div className="row my-5">
            <div className="col-5 ">
              <Inbox userId={userId} />
            </div>
            <div className="col-7">
              <div className="card">
                <div className="card-body">
                  <div className="row d-flex">
                    <div className="col-2 d-flex align-items-center justify-content-center icon">
                      <i className="i fas fa-puzzle-piece"></i>
                    </div>
                    <div className="col-8">
                      <h4>Applications</h4>
                      <p className="text-dark fs-5 text-muted">
                        {applicationCount} items
                      </p>
                    </div>
                  </div>
                  {userType === "Ceo" ? (
                    <Ceo setapplicationCount={setapplicationCount} />
                  ) : userType === "Manager" ? (
                    <Manager setapplicationCount={setapplicationCount} />
                  ) : userType === "HR" ? (
                    <HR setapplicationCount={setapplicationCount} />
                  ) : userType === "Employee" ? (
                    <Employee setapplicationCount={setapplicationCount} />
                  ) : userType === "Job" ? (
                    <Job setapplicationCount={setapplicationCount} />
                  ) : userType === "Payroll" ? (
                    <Payroll setapplicationCount={setapplicationCount} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
