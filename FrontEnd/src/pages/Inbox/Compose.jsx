import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const Compose = ({ authvar }) => {
  const [Sender, setSender] = useState([]);
  const [Sender_id, setSender_id] = useState(0);
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [sucessMsg, setsucessMsg] = useState(false);

  const user_id = sessionStorage.getItem("user_id");
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://localhost:4000/inbox/senderList/${user_id}`
        );
        if (Array.isArray(response.data)) setSender(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [user_id]);

  if (!authvar) {
    return <Redirect to="/" />;
  }
  const handeleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id,
      Sender_id,
      status: "Unread",
      Subject,
      Message,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/inbox/compose/",
        data
      );
      if (response.status === 200) {
        setsucessMsg(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3 className="text-center mt-2">Compose</h3>
      <div className=" d-flex justify-content-center col-12 my-3">
        <form
          className="col-10 border border-secondary pt-2"
          onSubmit={(e) => handeleSubmit(e)}
        >
          <div className="row">
            <div className="col-12 my-2">
              <div className="form-floating  mb-3 w-100">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setSender_id(e.target.value)}
                  required
                >
                  <option selected>Select</option>
                  {Sender &&
                    Sender.map((value, index) => {
                      return (
                        <option value={value.User_id} key={index}>
                          {value.Name} -({value.Type}
                          {value.User_id})
                        </option>
                      );
                    })}
                </select>
                <label htmlFor="floatingSelect">Sender List</label>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Subject"
                  placeholder="Subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
                <label htmlFor="Subject">Subject</label>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Message"
                  placeholder="Message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="Message">Message</label>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-8">
            <button className="btn btn-primary col-12" type="submit">
              Submit
            </button>
          </div>
          {sucessMsg && (
            <div className="text-center text-info">Successfully sent</div>
          )}
        </form>
      </div>
    </>
  );
};

export default Compose;
