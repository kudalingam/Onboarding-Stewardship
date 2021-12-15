import { useState } from "react";
const axios = require("axios");
const ApproveCard = (props) => {
  const [ReqStatus, setReqStatus] = useState("");
  const [ReqComments, setReqComments] = useState("");
  const [Message, setMessage] = useState("");
  const {
    Approver_id,
    Course_Subject,
    End_date,
    Learnings_id,
    Requester_Name,
    Requester_Type,
    Requester_id,
    Start_date,
    course_name,
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
      Requester_id,
      Approver_id,
      Start_date,
      End_date,
      ReqStatus,
      ReqComments,
      course_name,
      Course_Subject,
      Learnings_id,
    };
    async function putStatus() {
      try {
        const response = await axios.put(
          "http://localhost:4000/learnings/",
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
              <h5>{course_name}</h5>
            </div>
            <div className="text-muted">
              <p>
                {splitingTime(Start_date)}{" "}
                <span className="fw-bold">
                  <i className="far fa-arrow-alt-circle-right me-2"></i>
                </span>
                {splitingTime(End_date)}
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
                  data-bs-target={`#flush-collapseOne${Learnings_id}one`}
                  aria-expanded="false"
                  aria-controls={`#flush-collapseOne${Learnings_id}one`}
                >
                  Subject
                </button>
              </h2>
              <div
                id={`flush-collapseOne${Learnings_id}one`}
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{Course_Subject}</div>
              </div>
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
                    data-bs-target={`#flush-collapseOne${Learnings_id}two`}
                    aria-expanded="false"
                    aria-controls={`#flush-collapseOne${Learnings_id}two`}
                  >
                    Approve
                  </button>
                </h2>
                <div
                  id={`flush-collapseOne${Learnings_id}two`}
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
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
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
  );
};

export default ApproveCard;
