import { useEffect, useState } from "react";
import axios from "axios";
import Status from "../../Components/Status";
import { Redirect } from "react-router-dom";
const MyRequest = ({ authvar }) => {
  const [MyLearings, setMyLearings] = useState([]);
  const [NoLearings, setNoLearings] = useState(false);
  const userId = sessionStorage.getItem("user_id");
  useEffect(() => {
    async function getMyLearings() {
      try {
        const response = await axios.get(
          `http://localhost:4000/learnings/${userId}`
        );
        if (response.data.message === "Not Matched") setNoLearings(true);
        if (Array.isArray(response.data)) setMyLearings(response.data);
        if (userId !== "Ceo") {
          setNoLearings(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getMyLearings();
  }, [userId]);

  function splitingTime(t) {
    let Y, M, D;
    Y = t.slice(0, 4);
    M = t.slice(5, 7);
    D = t.slice(8, 10);
    return [D, "-", M, "-", Y];
  }
  if (!authvar) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="row">
        {MyLearings &&
          MyLearings.map((value) => {
            return (
              <Learning
                Learnings_id={value.Learnings_id}
                Approver_Name={value.Approver_Name}
                Approver_Type={value.Approver_Type}
                Approver_id={value.Approver_id}
                Comments={value.Comments}
                Course_Subject={value.Course_Subject}
                End_date={splitingTime(value.End_date)}
                Start_date={splitingTime(value.Start_date)}
                Requester_id={value.Requester_id}
                status={value.Status}
                course_name={value.course_name}
                key={value.Learnings_id}
              />
            );
          })}
      </div>
      <div>
        {NoLearings && (
          <h5 className="text-info">No Learning Ever made by you !!!</h5>
        )}
      </div>
    </>
  );
};

export default MyRequest;

const Learning = ({
  Approver_Name,
  Learnings_id,
  Approver_Type,
  Approver_id,
  Comments,
  Course_Subject,
  End_date,
  Start_date,
  Requester_id,
  status,
  course_name,
}) => {
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
                {Start_date} to {End_date}
              </p>
            </div>
          </div>
          <div className="float-start ps-2">
            {`${Approver_Name} - ${Approver_Type}`}
          </div>
          <div>
            <p className="float-end pe-2">
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
            </p>
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
            {status !== "Submitted" && (
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapseOne${Learnings_id}two`}
                    aria-expanded="false"
                    aria-controls={`#flush-collapseOne${Learnings_id}two`}
                  >
                    Comments
                  </button>
                </h2>
                <div
                  id={`flush-collapseOne${Learnings_id}two`}
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">{Comments}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
