import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
const NewTimeSheet = ({ authvar }) => {
  const [date, setdate] = useState("");
  const [workingDays, setworkingDays] = useState("");
  const [offDays, setoffDays] = useState("");
  const [message, setMessage] = useState(false);
  const submitTimeSheet = (e) => {
    e.preventDefault();
    let User_id = sessionStorage.getItem("user_id");
    const data = {
      User_id,
      Total_days_of_work: workingDays,
      Total_days_of_leave: offDays,
      MonthYear: date,
    };
    try {
      const subTimeSheet = async () => {
        const response = await axios.post(
          `http://localhost:4000/timeSheet/`,
          data
        );
        // console.log(response);
        setMessage(response.data.message);
        setTimeout(() => setMessage(), 2000);
      };
      subTimeSheet();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3 className="text-center mt-2">New TimeSheet</h3>
      <div className=" d-flex justify-content-center col-12 my-3">
        <form
          className="col-10 border border-secondary pt-2"
          onSubmit={(e) => submitTimeSheet(e)}
        >
          <div className="row">
            <div className="row my-2">
              <div className="col-12">
                <div className="form-floating  mb-3 w-100">
                  <input
                    type="month"
                    className="form-control"
                    id="Start date"
                    placeholder="Start date"
                    required
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                  />
                  <label htmlFor="floatingSelect">Month &#38; Year </label>
                </div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-6">
                <div className="form-floating  mb-3 w-100">
                  <input
                    type="number"
                    className="form-control"
                    id="Start date"
                    placeholder="No of Working Days"
                    min={1}
                    max={31}
                    required
                    value={workingDays}
                    onChange={(e) => setworkingDays(e.target.value)}
                  />
                  <label htmlFor="No of Working Days">No of Working Days</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating  mb-3 w-100">
                  <input
                    type="number"
                    className="form-control"
                    id="No of Working Days"
                    placeholder="No of Working Days"
                    max={31}
                    value={offDays}
                    onChange={(e) => setoffDays(e.target.value)}
                  />
                  <label htmlFor="No of Working Days">No of leave Days</label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-8 mb-4">
            <button className="btn btn-primary col-12" type="submit">
              Submit
            </button>
            {message && (
              <div className="text-center">
                <h5 className="text-info">Successfully TimeSheet Submitted</h5>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTimeSheet;
