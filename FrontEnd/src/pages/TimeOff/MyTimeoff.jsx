import { useEffect, useState } from "react";
import axios from "axios";
import Status from "../../Components/Status";
import { Redirect } from "react-router-dom";
const MyTimeoff = ({ authvar }) => {
  const [MyTimeOff, setMyTimeOff] = useState([]);
  const [NoTimeOff, setNoTimeOff] = useState(false);

  const user_id = sessionStorage.getItem("user_id");
  useEffect(() => {
    async function getMyTimeOff() {
      try {
        const response = await axios.get(
          `http://localhost:4000/timeOff/${user_id}`
        );
        if (Array.isArray(response.data)) setMyTimeOff(response.data);
        if (response.data.message) setNoTimeOff(true);
      } catch (error) {
        console.error(error);
      }
    }
    getMyTimeOff();
  }, []);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {MyTimeOff && (
        <div className="row d-flex justify-content-evenly">
          {MyTimeOff.map((value) => {
            return <MyTimeOffCard MyTimeOff={value} key={value.timeoff_id} />;
          })}
        </div>
      )}
      {NoTimeOff && (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
          <h5 className=" my-5 mx-5 text-info text-center ">
            No Applied leaves
          </h5>
        </div>
      )}
    </>
  );
};

export default MyTimeoff;

const MyTimeOffCard = (props) => {
  console.log(props.MyTimeOff);
  const {
    timeoff_id,
    Approver_Name,
    Approver_Type,
    start_date,
    end_date,
    status,
    type_leave,
    leave_subject,
    comments,
  } = props.MyTimeOff;
  function splitingTime(t) {
    let Y, M, D;
    Y = t.slice(0, 4);
    M = t.slice(5, 7);
    D = t.slice(8, 10);
    return [D, "-", M, "-", Y];
  }
  return (
    <>
      <div class="card col-5 my-3 rounded">
        <div class="card-body">
          <div className="row mb-4">
            <div className="col-8">
              {Approver_Name} - {Approver_Type}
            </div>
            <div className="col-4 ps-5">{type_leave}</div>
          </div>
          <div className="row mb-4">
            <div className="col-8">
              {splitingTime(start_date)}
              <span className="fw-bold">
                <i className="far fa-arrow-alt-circle-right mx-2"></i>
              </span>
              {splitingTime(end_date)}
            </div>
            <div className="col-4">
              {status === "Approved" ? (
                <Status
                  color="success"
                  statusName={status}
                  icon="fas fa-check ms-1"
                />
              ) : status === "Submitted" ? (
                <Status
                  color="warning"
                  statusName={status}
                  icon="fas fa-paper-plane ms-1"
                />
              ) : (
                <Status
                  color="danger"
                  statusName={status}
                  icon="fas fa-ban ms-1"
                />
              )}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">{leave_subject}</div>
          </div>
          {status !== "Submitted" && (
            <div className="row">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapseOne${timeoff_id}one`}
                      aria-expanded="false"
                      aria-controls={`#flush-collapseOne${timeoff_id}one`}
                    >
                      Comments
                    </button>
                  </h2>
                  <div
                    id={`flush-collapseOne${timeoff_id}one`}
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{comments}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
