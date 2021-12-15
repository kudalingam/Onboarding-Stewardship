import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
const NewProfile = ({ authvar }) => {
  const [Myprofile, setMyprofile] = useState({});
  const user_id = sessionStorage.getItem("user_id");
  const [message, setMessage] = useState(false);
  useEffect(() => {
    async function getUser() {
      const user_id = sessionStorage.getItem("user_id");
      try {
        const response = await axios.get(
          `http://localhost:4000/user/${user_id}`
        );
        setMyprofile(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  const handeleSubmit = async (e) => {
    e.preventDefault();
    const data = Myprofile;
    console.log(data);
    try {
      console.log("Data", data);
      const response = await axios.put(
        `http://localhost:4000/user/Update/${user_id}`,
        data
      );
      if (response.status === 200) {
        setMessage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const {
    Name,
    Email_id,
    Gender,
    ph_no,
    Aadhar,
    Pan,
    Address,
    Bank_name,
    linkedin,
    github,
    IFSC_Code,
    accountNumber,
  } = Myprofile;
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <h3 className="text-center mt-2">Update</h3>
      <div className=" d-flex justify-content-center col-12 my-3">
        <form
          className="col-10 border border-secondary pt-2"
          onSubmit={(e) => handeleSubmit(e)}
        >
          <div className="row">
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Username"
                  value={Name}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        Name: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Name">Name</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  value={Email_id}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        Email_id: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Course_Subject">Email</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <select
                  className="form-select"
                  aria-label="Gender select"
                  value={Gender}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        Gender: e.target.value,
                      };
                    });
                  }}
                >
                  <option disabled>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Trancender">Trancender</option>
                </select>
                <label htmlFor="Password">Gender</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Username"
                  value={ph_no}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        ph_no: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Name">Phone Number</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  value={Aadhar}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        Aadhar: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Course_Subject">Aadhar Number</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={Pan}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        Pan: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Password">Pan Number</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Username"
                  value={Address}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        Address: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Name">Address</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  value={Bank_name}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        Bank_name: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Course_Subject">Bank Name</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={accountNumber}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        accountNumber: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Password">Account Number</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Username"
                  value={IFSC_Code}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        IFSC_Code: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Name">IFSC Code</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="textarea"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  value={github}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        github: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Course_Subject">Github</label>
              </div>
            </div>
            <div className="col-6 my-1">
              <div className="form-floating mb-3 w-100">
                <input
                  type="text"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={linkedin}
                  onChange={(e) => {
                    setMyprofile((preState) => {
                      return {
                        ...preState,
                        linkedin: e.target.value,
                      };
                    });
                  }}
                />
                <label htmlFor="Password">LinkedIn</label>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-8">
            <button className="btn btn-primary col-12" type="submit">
              Submit
            </button>
            {message && (
              <div className="text-center">
                <h5 className="text-info">Successfully Updated</h5>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewProfile;
