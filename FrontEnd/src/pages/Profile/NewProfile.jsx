import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
const NewProfile = ({ authvar }) => {
  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState(false);

  const handeleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Name,
      Type,
      Email,
      Password,
    };
    try {
      console.log("Data", data);
      const response = await axios.post("http://localhost:4000/user/", data);
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
      <h3 className="text-center mt-2">Create Employee</h3>
      <div className=" d-flex justify-content-center col-12 my-3">
        <form
          className="col-10 border border-secondary pt-2"
          onSubmit={(e) => handeleSubmit(e)}
        >
          <div className="row">
            <div className="col-12 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Username"
                  required
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="Name">Name</label>
              </div>
            </div>
            <div className="col-12 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="Course_Subject">Email</label>
              </div>
            </div>
            <div className="col-12 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  required
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="Password">Password</label>
              </div>
            </div>
            <div className="col-12 my-1">
              <div className="col-8 my-1">
                <select
                  className="form-select"
                  value={Type}
                  required
                  onChange={(e) => setType(e.target.value)}
                >
                  <option selected>Select</option>
                  <option value="Ceo">Ceo</option>
                  <option value="Manager">Manager</option>
                  <option value="HR">HR</option>
                  <option value="Employee">Employee</option>
                  <option value="Job">Job</option>
                  <option value="Payroll">Payroll</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-8">
            <button className="btn btn-primary col-12" type="submit">
              Submit
            </button>
            {message && (
              <div className="text-center">
                <h5 className="text-info">Successfully Employee Created</h5>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewProfile;
