import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const NewPerformance = ({ authvar }) => {
  const [Receiver, setReceiver] = useState([]);
  const [Receiver_id, setReceiver_id] = useState(0);
  const [goal, setgoal] = useState("");
  const [objective, setobjective] = useState("");
  const [Due_date, setDue_Date] = useState("");
  const [comments, setcomments] = useState("");
  const [message, setMessage] = useState(false);
  const user_type = sessionStorage.getItem("user_type");
  useEffect(() => {
    async function getEmployee() {
      try {
        const response = await axios.get(
          `http://localhost:4000/performance/getReceiver/${user_type}`
        );
        await setReceiver([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    getEmployee();
  }, []);

  const handeleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Assigner_id: sessionStorage.getItem("user_id"),
      Receiver_id: Receiver_id,
      Due_Date: Due_date,
      status: "Assigned",
      goal: goal,
      objective: objective,
      comments: comments,
    };
    try {
      console.log("Data", data);
      const response = await axios.post(
        "http://localhost:4000/performance/",
        data
      );
      if (response.status === 200) {
        setMessage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <h3 className="text-center mt-2">Set Performance</h3>
      <div className=" d-flex justify-content-center col-12 my-3">
        <form
          className="col-10 border border-secondary pt-2"
          onSubmit={(e) => handeleSubmit(e)}
        >
          <div className="row">
            <div className="col-6 my-1">
              <div className="form-floating  mb-3 w-100">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setReceiver_id(e.target.value)}
                  value={Receiver_id}
                  required
                >
                  <option selected>Select</option>
                  {Receiver &&
                    Receiver.map((value, index) => {
                      return (
                        <option value={value.User_id} key={index}>
                          {value.Name} -({value.Type}
                          {value.User_id})
                        </option>
                      );
                    })}
                </select>
                <label htmlFor="floatingSelect">Receiver List</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="date"
                  className="form-control"
                  id="Start date"
                  placeholder="Start date"
                  required
                  value={Due_date}
                  onChange={(e) => setDue_Date(e.target.value)}
                />
                <label htmlFor="Start date">Due date</label>
              </div>
            </div>
            <div className="col-12 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Course_Subject"
                  placeholder="Course Subject"
                  required
                  value={goal}
                  onChange={(e) => setgoal(e.target.value)}
                />
                <label htmlFor="Course_Subject">Goal</label>
              </div>
            </div>
            <div className="col-12 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Objective"
                  placeholder="Objective"
                  required
                  value={objective}
                  onChange={(e) => setobjective(e.target.value)}
                />
                <label htmlFor="Objective">Objective</label>
              </div>
            </div>
            <div className="col-12 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Comments"
                  placeholder="Comments"
                  required
                  value={comments}
                  onChange={(e) => setcomments(e.target.value)}
                />
                <label htmlFor="Comments">Comments</label>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 col-8">
            <button className="btn btn-primary col-12" type="submit">
              Submit
            </button>
            {message && (
              <div className="text-center">
                <h5 className="text-info">Successfully Request Submitted</h5>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPerformance;
