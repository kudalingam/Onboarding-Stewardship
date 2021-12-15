import { useState } from "react";
const axios = require("axios");
const ApproveCardPerformance = (props) => {
  const [ReqStatus, setReqStatus] = useState("");
  const [ReqComments, setReqComments] = useState("");
  const [Message, setMessage] = useState("");

  /*
  
Requester_Name: "Ganges"
Requester_Type: "Employee"
assigned_date: "2021-10-31T11:01:58.000Z"
assigner_id: 19
comments: "rggreger"
due_date: "2021-10-30T19:06:58.000Z"
goal: "sgrrger"
objective: "rger"
peff_id: 35
receiver_id: 16
status: "Assigned"
  
  */
  const {
    assigner_id,
    goal,
    due_date,
    peff_id,
    Requester_Name,
    Requester_Type,
    receiver_id,
    objective,
    assigned_date,
  } = props.ApproveRequestItem;
  function splitingTime(t) {
    let Y, M, D;
    Y = t.slice(0, 4);
    M = t.slice(5, 7);
    D = t.slice(8, 10);
    return [D, "-", M, "-", Y];
  }

  const submitApprove = () => {
    const data = {
      receiver_id,
      assigner_id,
      due_date,
      ReqStatus,
      ReqComments,
      goal,
      objective,
      peff_id,
    };
    async function putStatus() {
      try {
        console.log(data);
        const response = await axios.put(
          "http://localhost:4000/performance/",
          data
        );
        console.log(response);
        if (response.data.message === "Sucessfully Updated") {
          setMessage("Sucessfully Updated");
        }
      } catch (error) {
        console.error(error);
      }
    }
    putStatus();
  };

  return (
    <div className="col-6 my-3">
      <div className="card rounded">
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <div className="">
              <h5>{goal}</h5>
            </div>
            <div className="text-muted">
              <p>
                {splitingTime(assigned_date)}
                <span className="fw-bold">
                  <i className="far fa-arrow-alt-circle-right me-2"></i>
                </span>
                {splitingTime(due_date)}
              </p>
            </div>
          </div>
          <div className="float-start ps-2">
            {`${Requester_Name}  -  ${Requester_Type}`}
          </div>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapseOne${peff_id}one`}
                  aria-expanded="false"
                  aria-controls={`#flush-collapseOne${peff_id}one`}
                >
                  Objective
                </button>
              </h2>
              <div
                id={`flush-collapseOne${peff_id}one`}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{objective}</div>
              </div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapseOne${peff_id}two`}
                      aria-expanded="false"
                      aria-controls={`#flush-collapseOne${peff_id}two`}
                    >
                      Approve
                    </button>
                  </h2>
                  <div
                    id={`flush-collapseOne${peff_id}two`}
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-4">
                          <select
                            className="form-select"
                            value={ReqStatus}
                            required
                            onChange={(e) => setReqStatus(e.target.value)}
                          >
                            <option selected>Select</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                        <div className="col-8">
                          <input
                            type="text"
                            className="form-control"
                            id="comments"
                            placeholder="comments"
                            required
                            value={ReqComments}
                            onChange={(e) => setReqComments(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary w-25 "
                          type="button"
                          onClick={submitApprove}
                        >
                          Submit
                        </button>
                      </div>
                      <p className="text-center fw-500">
                        {Message && (
                          <small className="text-success">
                            Sucessfully Updated
                          </small>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveCardPerformance;
