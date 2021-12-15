import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const Technical = ({ authvar }) => {
  const [Technical, setTechnical] = useState([]);
  const [NoTechnical, setNoTechnical] = useState(false);
  const user_id = sessionStorage.getItem("user_id");
  useEffect(() => {
    try {
      const getMyTechnical = async () => {
        const response = await axios.get(
          `http://localhost:4000/test/technical/get/${user_id}`
        );
        console.log(response);
        if (Array.isArray(response.data)) setTechnical(response.data);
        if (response.data.message) setNoTechnical(true);
      };
      getMyTechnical();
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {Technical && (
        <div className="col-12">
          <div className="table-responsive my-3">
            <table className="table  table-bordered table-hover text-center ">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Atempt</th>
                  <th scope="col">No.of Questions</th>
                  <th scope="col">No.of Answered Questions</th>
                  <th scope="col">No.of Correct Answers</th>
                  <th scope="col">No.of Wrong Answers</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {Technical.map((value, index) => {
                  return (
                    <TableRow
                      Technical={value}
                      key={value.tech_id}
                      Atempt={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {NoTechnical && (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
          <h5 className=" my-5 mx-5 text-info text-center ">
            No Technical Test Record
          </h5>
        </div>
      )}
    </>
  );
};

export default Technical;

const TableRow = (props) => {
  const { Technical, Atempt } = props;
  return (
    <>
      <tr>
        <th scope="row">{Atempt + 1}</th>
        <th style={{ color: "blue" }} scope="row">
          {Technical.No_of_Questions}
        </th>
        <th style={{ color: "green" }} scope="row">
          {Technical.No_of_Answered}
        </th>
        <th style={{ color: "green" }} scope="row">
          {Technical.No_of_Correct}
        </th>
        <th style={{ color: "red" }} scope="row">
          {Technical.No_of_Wrong}
        </th>
        <th style={{ color: "green", fontSize: "25px" }} scope="row">
          {Technical.Score}%
        </th>
      </tr>
    </>
  );
};
