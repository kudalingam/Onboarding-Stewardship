import "./Css/style.css";
import { Link } from "react-router-dom";
let user_type = sessionStorage.getItem("user_type");
const Sidebar = ({ active }) => {
  return (
    <div className="col-11 d-flex justify-content-center rounded">
      <ul className="list-group-flush list-group">
        {active !== "Profile" && (
          <Link to="/Profile" className="link">
            <li className="my-4   py-2 text-center  bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5 ">Profile</h5>
            </li>
          </Link>
        )}
        {active !== "Timeoff" && user_type !== "Job" && (
          <Link to="/TimeOff" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5 ">Timeoff</h5>
            </li>
          </Link>
        )}
        {active !== "Inbox" && (
          <Link to="/Inbox" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5 ">Inbox</h5>
            </li>
          </Link>
        )}
        {active !== "Performance" && user_type !== "Job" && (
          <Link to="/Performance" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-3">Performance</h5>
            </li>
          </Link>
        )}
        {active !== "Time Sheet" && user_type !== "Ceo" && user_type !== "Job" && (
          <Link to="/TimeSheet" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-3">Time Sheet</h5>
            </li>
          </Link>
        )}
        {active !== "Learnings" && user_type !== "Job" && (
          <Link to="/Learnings" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5">Learnings</h5>
            </li>
          </Link>
        )}
        {active !== "Teams" && user_type === "Ceo" && (
          <Link to="/Teams" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5">Teams</h5>
            </li>
          </Link>
        )}
        {active !== "Aptitude" && user_type === "Job" && (
          <Link to="/aptitude/instructions" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5">Aptitude</h5>
            </li>
          </Link>
        )}
        {active !== "Technical" && user_type === "Job" && (
          <Link to="/technical/instructions" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5">Technical</h5>
            </li>
          </Link>
        )}
        {active !== "Schedule" && user_type === "Job" && (
          <Link to="/Schedule" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5">Schedule</h5>
            </li>
          </Link>
        )}
        {active !== "Strategy" && user_type === "Job" && (
          <Link to="/Strategy" className="link">
            <li className="my-4 py-2 text-center   bg-white list-group-item rounded-pill sidebar">
              <h5 className="px-5">Strategy</h5>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
