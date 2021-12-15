import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
const NewTimeoff = ({ authvar }) => {
  const [Approver, setApprover] = useState([]);
  const [Approver_id, setApprover_id] = useState(0);
  const [leaveType, setleaveType] = useState("");
  const [leaveSubject, setleaveSubject] = useState("");
  const [start_Date, setstart_Date] = useState("");
  const [end_Date, setend_Date] = useState("");
  const [message, setMessage] = useState(false);

  const user_type = sessionStorage.getItem("user_type");

  useEffect(() => {
    async function getHR() {
      try {
        const response = await axios.get(
          `http://localhost:4000/timeOff/getApprover/${user_type}`
        );
        await setApprover([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    getHR();
  }, []);

  const handeleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Requester_id: sessionStorage.getItem("user_id"),
      Approver_id: Approver_id,
      start_Date: start_Date,
      end_Date: end_Date,
      status: "Submitted",
      leaveType: leaveType,
      leaveSubject: leaveSubject,
    };
    try {
      // console.log(data);
      const response = await axios.post("http://localhost:4000/timeOff/", data);
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
      <h3 className="text-center mt-2">New TimeOff</h3>
      <div className=" d-flex justify-content-center col-12 my-3">
        <form
          className="col-10 border border-secondary pt-2"
          onSubmit={(e) => handeleSubmit(e)}
        >
          <div className="row">
            <div className="col-6 my-2">
              <div className="form-floating  mb-3 w-100">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setApprover_id(e.target.value)}
                  required
                >
                  <option selected>Select</option>
                  {Approver &&
                    Approver.map((value, index) => {
                      return (
                        <option value={value.User_id} key={index}>
                          {value.Name} -({value.Type}
                          {value.User_id})
                        </option>
                      );
                    })}
                </select>
                <label htmlFor="floatingSelect">Approver List</label>
              </div>
              <div className="form-floating mb-3 w-100">
                <input
                  type="date"
                  className="form-control"
                  id="Start date"
                  placeholder="Start date"
                  required
                  onChange={(e) => setstart_Date(e.target.value)}
                />
                <label htmlFor="Start date">Start date</label>
              </div>
            </div>
            <div className="col-6 my-2">
              <div className="form-floating  mb-3 w-100">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  required
                  onChange={(e) => setleaveType(e.target.value)}
                  required
                >
                  <option selected>Select</option>
                  <option value="Sick">Sick</option>
                  <option value="Casual">Casual</option>
                  <option value="Personal">Personal</option>
                </select>
                <label htmlFor="floatingSelect">Type Of Leave</label>
              </div>

              <div className="form-floating mb-3 w-100">
                <input
                  type="date"
                  className="form-control"
                  id="End date"
                  placeholder="End date"
                  required
                  onChange={(e) => setend_Date(e.target.value)}
                />
                <label htmlFor="End date">End date</label>
              </div>
            </div>
            <div className="col-12 my-2">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Course_Subject"
                  placeholder="Course Subject"
                  required
                  onChange={(e) => setleaveSubject(e.target.value)}
                />
                <label htmlFor="Course_Subject">Reason</label>
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

export default NewTimeoff;
