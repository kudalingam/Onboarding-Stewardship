import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Sent = ({ authvar }) => {
  const [Received, setReceived] = useState([]);
  const [NoReceived, setNoReceived] = useState(false);
  const user_id = sessionStorage.getItem("user_id");
  useEffect(() => {
    async function getReceived() {
      try {
        const response = await axios.get(
          `http://localhost:4000/inbox/sent/all/${user_id}`
        );
        console.log("Sent recived", response);
        if (Array.isArray(response.data)) setReceived(response.data);
        if (response.data.message) setNoReceived(true);
      } catch (error) {
        console.error(error);
      }
    }
    getReceived();
  }, []);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {Received && (
        <div className="row d-flex justify-content-evenly">
          {Received.map((value) => {
            return <MySent Sent={value} key={value.message_id} />;
          })}
        </div>
      )}

      {NoReceived && (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
          <h5 className=" my-5 mx-5 text-info text-center ">
            No Messages Sent
          </h5>
        </div>
      )}
    </>
  );
};

export default Sent;
const MySent = (props) => {
  const {
    message_id,
    sender_id,
    receiver_id,
    Subject,
    receiverName,
    receiverType,
    message,
    time,
    Status,
  } = props.Sent;

  function splitingTime(t) {
    let Y, M, D, T;
    Y = t.slice(0, 4);
    M = t.slice(5, 7);
    D = t.slice(8, 10);
    T = t.slice(11, 19);

    return [T, [D, "-", M, "-", Y]];
  }
  return (
    <>
      <div className="card col-12 my-3 ms-3 rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <p>
                <span className="text-secondary fw-bold">{receiverName}</span> -
                <span className="text-info text-muted"> {receiverType}</span>
              </p>
            </div>
            <div className="col-6">
              <p>
                <span className="fw-bold">SUB:</span> {Subject}
              </p>
            </div>
            <div className="col-3 float-end ">
              <i class="far fa-clock px-2" />
              {splitingTime(time)[0]}
              <i class="far fa-calendar px-2"></i>
              {splitingTime(time)[1]}
            </div>
          </div>
          <div className="row">
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
                    data-bs-target={`#flush-collapseOne${message_id}one`}
                    aria-expanded="false"
                    aria-controls={`#flush-collapseOne${message_id}one`}
                  >
                    Message
                  </button>
                </h2>
                <div
                  id={`flush-collapseOne${message_id}one`}
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">{message}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
