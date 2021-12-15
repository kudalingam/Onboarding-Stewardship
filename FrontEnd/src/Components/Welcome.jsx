import "../pages/Dashboard/Dashboard.css";
const Welcome = ({ userId, userName }) => {
  let userType = sessionStorage.getItem("user_type");
  return (
    <div className="row card1">
      <div className="welcome bg-light d-flex justify-content-between px-4 py-2 rounded">
        <h1>
          Welcome {userName}{" "}
          <span className="text-muted">({`${userType}${userId}`})</span>
        </h1>
        {/* <div className="d-flex align-items-center">
          <div>
            <i className="fas fa-cog fa-2x" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
