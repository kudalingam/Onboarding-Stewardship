import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import "../../Components/Css/style.css";
const Icon = ({ menu, icons }) => {
  return (
    <div className="icon text-center">
      <i className={`${icons}`}></i>
      <h4 className="text-dark">{menu}</h4>
    </div>
  );
};
export const Ceo = ({ setapplicationCount }) => {
  useEffect(() => {
    setapplicationCount(6);
  }, [setapplicationCount]);
  return (
    <>
      <div className="mx-5">
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Profile" className="link">
              <Icon menu="Profile" icons="far fa-user" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Inbox" className="link">
              <Icon menu="Inbox" icons="fas fa-envelope-open-text" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/TimeOff" className="link">
              <Icon menu="Time off" icons="fas fa-history" />
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Learnings" className="link">
              <Icon menu="Learnings" icons="fas fa-graduation-cap" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Performance" className="link">
              <Icon menu="Performance" icons="fas fa-chart-line" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Teams" className="link">
              <Icon menu="Teams" icons="fas fa-users" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const Employee = ({ setapplicationCount }) => {
  useEffect(() => {
    setapplicationCount(6);
  }, [setapplicationCount]);
  return (
    <>
      <div className="mx-5">
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Profile" className="link">
              <Icon menu="Profile" icons="far fa-user" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Inbox" className="link">
              <Icon menu="Inbox" icons="fas fa-envelope-open-text" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/TimeOff" className="link">
              <Icon menu="Time off" icons="fas fa-history" />
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Learnings" className="link">
              <Icon menu="Learnings" icons="fas fa-graduation-cap" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Performance" className="link">
              <Icon menu="Performance" icons="fas fa-chart-line" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/TimeSheet" className="link">
              <Icon menu="Time Sheet" icons="far fa-file-alt" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const Manager = ({ setapplicationCount }) => {
  useEffect(() => {
    setapplicationCount(6);
  }, [setapplicationCount]);
  return (
    <>
      <div className="mx-5">
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Profile" className="link">
              <Icon menu="Profile" icons="far fa-user" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Inbox" className="link">
              <Icon menu="Inbox" icons="fas fa-envelope-open-text" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/TimeOff" className="link">
              <Icon menu="Time off" icons="fas fa-history" />
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Learnings" className="link">
              <Icon menu="Learnings" icons="fas fa-graduation-cap" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Performance" className="link">
              <Icon menu="Performance" icons="fas fa-chart-line" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/TimeSheet" className="link">
              <Icon menu="Time Sheet" icons="far fa-file-alt" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const HR = ({ setapplicationCount }) => {
  useEffect(() => {
    setapplicationCount(6);
  }, [setapplicationCount]);
  return (
    <>
      <div className="mx-5">
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Profile" className="link">
              <Icon menu="Profile" icons="far fa-user" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Inbox" className="link">
              <Icon menu="Inbox" icons="fas fa-envelope-open-text" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/TimeOff" className="link">
              <Icon menu="Time off" icons="fas fa-history" />
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Learnings" className="link">
              <Icon menu="Learnings" icons="fas fa-graduation-cap" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Performance" className="link">
              <Icon menu="Performance" icons="fas fa-chart-line" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/TimeSheet" className="link">
              <Icon menu="Time Sheet" icons="far fa-file-alt" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const Payroll = ({ setapplicationCount }) => {
  useEffect(() => {
    setapplicationCount(4);
  }, [setapplicationCount]);
  return (
    <>
      <div className="mx-5">
        <div className="row my-4">
          <div className="col-6">
            <Icon menu="Profile" icons="far fa-user" />
          </div>
          <div className="col-6">
            <Icon menu="Inbox" icons="fas fa-envelope-open-text" />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-6">
            <Icon menu="Invoice" icons="fas fa-file-invoice-dollar" />
          </div>
          <div className="col-6">
            <Icon menu="Time Sheet" icons="far fa-file-alt" />
          </div>
        </div>
      </div>
    </>
  );
};

export const Job = ({ setapplicationCount }) => {
  useEffect(() => {
    setapplicationCount(6);
  }, [setapplicationCount]);
  return (
    <>
      <div className="mx-5">
        <div className="row my-4">
          <div className="col-4">
            <Link to="/Profile" className="link">
              <Icon menu="Profile" icons="far fa-user" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Inbox" className="link">
              <Icon menu="Inbox" icons="fas fa-envelope-open-text" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/aptitude/instructions" className="link">
              <Icon menu="Aptitude" icons="fab fa-buysellads" />
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4">
            <Link to="/technical/instructions" className="link">
              <Icon menu="Technical" icons="fas fa-laptop-code" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Schedule" className="link">
              <Icon menu="Schedule" icons="far fa-calendar-alt" />
            </Link>
          </div>
          <div className="col-4">
            <Link to="/Strategy" className="link">
              <Icon menu="Strategy" icons="fas fa-chart-line" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
