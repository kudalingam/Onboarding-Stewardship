// import
import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/Dashboard/Dashboard.css";
import "./Css/style.css";
// End of import

const Inbox = ({ userId }) => {
  const [receivedMsg, setreceivedMsg] = useState([]);
  const [toggle, setToggle] = useState(false);

  const ClickHander = () => {
    setToggle((preState) => !preState);
  };
  useEffect(() => {
    async function getMsg() {
      try {
        const response = await axios.get(
          ` http://localhost:4000/inbox/received/${userId}`
        );
        setreceivedMsg(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMsg();
  }, [toggle, userId]);

  return (
    <>
      <div className="card inbox-card-bg h-100">
        <div className="card-header m-2">
          <div style={{ fontSize: "25px" }}>
            <i
              style={{ color: "#3c6cb6" }}
              className="fas fa-envelope-open-text me-3"
            />
            Inbox
            <h5 className="float-end py-2 counts">
              {receivedMsg.length} Items
            </h5>
          </div>
        </div>
        <div
          className="card-body overflow-auto inside-scroll-bar"
          style={{
            height: "300px",
          }}
        >
          {receivedMsg.length === 0 ? (
            <Nomsg />
          ) : (
            <Msg msg={receivedMsg} ClickHander={ClickHander} />
          )}
        </div>
      </div>
    </>
  );
};

const Msg = ({ msg, ClickHander }) => {
  return (
    <>
      {msg.map((value) => {
        return (
          <Dismsg
            msg_id={value.message_id}
            Subject={value.Subject}
            Time={value.time}
            Sender={parseInt(value.sender_id)}
            key={value.message_id}
            ClickHander={ClickHander}
          />
        );
      })}
    </>
  );
};

const Dismsg = ({ Subject, Time, Sender, ClickHander, msg_id }) => {
  const [SenderName, setSenderName] = useState("");
  const [SenderType, setSenderType] = useState("");
  const [time, settime] = useState([]);

  useEffect(() => {
    async function getUser1(Sender_id) {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/${Sender_id}`
        );
        if (response.status === 200) {
          console.log("sender type", response.data[0].Type);
          setSenderName(response.data[0].Name);
          setSenderType(response.data[0].Type);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUser1(Sender);
  }, [Sender]);
  useEffect(() => {
    function splitingTime(t) {
      let Y, M, D, h, m, s;
      Y = t.slice(0, 4);
      M = t.slice(5, 7);
      D = t.slice(8, 10);
      h = t.slice(11, 13);
      m = t.slice(14, 16);
      s = t.slice(17, 19);
      return [Y, "-", M, "-", D, " ", h, ":", m, ":", s];
    }
    const returnedArray = splitingTime(Time);
    settime(returnedArray);
  }, [Time]);

  const markAsRead = (msg_id) => {
    async function markAsReadfun() {
      try {
        const response = await axios.put(
          `http://localhost:4000/inbox/received/${msg_id}`
        );
        console.log(response);
        if (response.status === 200) {
          ClickHander();
        }
      } catch (error) {
        console.error(error);
      }
    }
    markAsReadfun();
  };
  return (
    <div className=" m-1  card-inside p-2">
      <div className="row mb-3">
        <div className="col-6 text-start">{`${SenderName} - ${SenderType}`}</div>
        <div className="col-6 text-muted text-end">{time}</div>
      </div>
      <div className="row mb-3">
        <div className="col-9 text-start">{Subject}</div>
        <div
          className="col-3 read text-muted text-end"
          onClick={() => markAsRead(msg_id)}
        >
          <small className="badge bg-success">
            Read
            <i className="fas fa-check-double ms-2" />
          </small>
        </div>
      </div>
    </div>
  );
};

const Nomsg = () => {
  return (
    <>
      <div className="text-center text-muted">
        <i style={{ color: "#3c6cb6" }} className="fas fa-inbox fa-3x" />
      </div>
      <p className="text-center text-muted">No Messages</p>
    </>
  );
};

export default Inbox;
