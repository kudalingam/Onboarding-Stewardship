import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const Aptitude = ({ authvar }) => {
  const [Aptitude, setAptitude] = useState([]);
  const [NoAptitude, setNoAptitude] = useState(false);
  const user_id = sessionStorage.getItem("user_id");
  useEffect(() => {
    try {
      const getMyAptitude = async () => {
        const response = await axios.get(
          `http://localhost:4000/test/aptitude/get/${user_id}`
        );
        console.log(response);
        if (Array.isArray(response.data)) setAptitude(response.data);
        if (response.data.message) setNoAptitude(true);
      };
      getMyAptitude();
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {Aptitude && (
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
                {Aptitude.map((value, index) => {
                  return (
                    <TableRow
                      Aptitude={value}
                      key={value.apti_id}
                      Atempt={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {NoAptitude && (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
          <h5 className=" my-5 mx-5 text-info text-center ">
            No Aptitude Test Record
          </h5>
        </div>
      )}
    </>
  );
};

export default Aptitude;

const TableRow = (props) => {
  const { Aptitude, Atempt } = props;
  return (
    <>
      <tr>
        <th scope="row">{Atempt + 1}</th>
        <th style={{ color: "blue" }} scope="row">
          {Aptitude.No_of_Questions}
        </th>
        <th style={{ color: "green" }} scope="row">
          {Aptitude.No_of_Answered}
        </th>
        <th style={{ color: "green" }} scope="row">
          {Aptitude.No_of_Correct}
        </th>
        <th style={{ color: "red" }} scope="row">
          {Aptitude.No_of_Wrong}
        </th>
        <th style={{ color: "green", fontSize: "25px" }} scope="row">
          {Aptitude.Score}%
        </th>
      </tr>
    </>
  );
};
