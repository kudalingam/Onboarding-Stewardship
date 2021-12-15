import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const MyProfile = ({ authvar }) => {
  const [Myprofile, setMyprofile] = useState({});
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
  // const splitingTime = (t) => {
  //   let Y, M, D;
  //   Y = t.slice(0, 4);
  //   M = t.slice(5, 7);
  //   D = t.slice(8, 10);
  //   return [D, "-", M, "-", Y];
  // };
  if (!authvar) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="card my-5">
        <div className="card-body">
          <div className="personal">
            <div className="row mx-4 my-4">
              <div className="col-6">
                <p>
                  <span className="fw-bold">Name : </span>
                  {Myprofile.Name}
                </p>
              </div>
              <div className="col-6">
                <p>
                  <span className="fw-bold">Type : </span>
                  {Myprofile.Type}
                </p>
              </div>
            </div>
            <div className="row mx-4 my-4">
              <div className="col-6">
                <p>
                  <span className="fw-bold">Gender : </span>
                  {Myprofile.Gender}
                </p>
              </div>
              <div className="col-6">
                <p>
                  <span className="fw-bold">DOB : </span>
                  {Myprofile.DOB && Myprofile.DOB.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
          <div className="contact-Indentity">
            <div className="row mx-4 my-4">
              <div className="col-6">
                <p>
                  <span className="fw-bold">Email : </span>
                  {Myprofile.Email_id}
                </p>
              </div>
              <div className="col-6">
                <p>
                  <span className="fw-bold">Phone No : </span>
                  {Myprofile.ph_no}
                </p>
              </div>
            </div>
            <div className="row mx-4 my-4">
              <div className="col-6">
                <p>
                  <span className="fw-bold">Aadhar No : </span>
                  {Myprofile.Aadhar}
                </p>
              </div>
              <div className="col-6">
                <p>
                  <span className="fw-bold">PAN No : </span>
                  {Myprofile.Pan}
                </p>
              </div>
            </div>
            <div className="row mx-4 my-4">
              <div className="col-12">
                <p>
                  <span className="fw-bold">Address: </span>
                  {Myprofile.Address}
                </p>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="row mx-4 my-4">
              <div className="col-6">
                <p>
                  <span className="fw-bold">Github : </span>
                  {Myprofile.github}
                </p>
              </div>
              <div className="col-6">
                <p>
                  <span className="fw-bold">Linkedin : </span>
                  {Myprofile.linkedin}
                </p>
              </div>
            </div>
          </div>
          <div className="Bank">
            <div className="row mx-4 my-4">
              <div className="col-4">
                <p>
                  <span className="fw-bold">Bank name : </span>
                  {Myprofile.Bank_name}
                </p>
              </div>
              <div className="col-4">
                <p>
                  <span className="fw-bold">Account No: </span>
                  {Myprofile.accountNumber}
                </p>
              </div>
              <div className="col-4">
                <p>
                  <span className="fw-bold">IFSC Code: </span>
                  {Myprofile.IFSC_Code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
