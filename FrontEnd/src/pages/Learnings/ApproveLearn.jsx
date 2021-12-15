import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ApproveCard from "./ApproveCard";
const ApproveLearn = ({ authvar }) => {
  const [ApproveRequest, setApproveRequest] = useState([]);
  const [NoApproveList, setNoApproveList] = useState(false);
  let userID = parseInt(sessionStorage.getItem("user_id"));
  useEffect(() => {
    async function getApproveList() {
      try {
        const response = await axios.get(
          `http://localhost:4000/learnings/Approve/${userID}`
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
            <ApproveCard ApproveRequestItem={value} key={value.Learnings_id} />
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

export default ApproveLearn;
