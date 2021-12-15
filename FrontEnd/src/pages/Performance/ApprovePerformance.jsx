import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";
import ApproveCardPerformance from "./ApproveCardPerformance";
const ApprovePerformance = ({ authvar }) => {
  const [ApproveRequest, setApproveRequest] = useState([]);
  const [NoApproveList, setNoApproveList] = useState(false);
  useEffect(() => {
    let userID = parseInt(sessionStorage.getItem("user_id"));
    async function getApproveList() {
      try {
        const response = await axios.get(
          `http://localhost:4000/performance/Approve/${userID}`
        );

        if (Array.isArray(response.data)) setApproveRequest(response.data);
        if (response.data.message) setNoApproveList(true);
      } catch (error) {
        console.error(error);
      }
    }
    getApproveList();
  }, []);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {ApproveRequest &&
        ApproveRequest.map((value) => {
          return (
            <ApproveCardPerformance
              ApproveRequestItem={value}
              key={value.peff_id}
            />
          );
        })}
      {NoApproveList && (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
          <h5 className=" my-5 mx-5 text-info text-center ">
            No Pending Requests
          </h5>
        </div>
      )}
    </>
  );
};

export default ApprovePerformance;
