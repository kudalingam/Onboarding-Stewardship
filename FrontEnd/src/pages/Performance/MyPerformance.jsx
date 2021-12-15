import axios from "axios";
import { Redirect } from "react-router-dom";

import { useEffect, useState } from "react";

const MyPerformance = ({ authvar }) => {
  const [MyPerformance, setMyPerformance] = useState([]);
  const [NoMyPerformance, setNoMyPerformance] = useState(false);
  const user_id = sessionStorage.getItem("user_id");

  useEffect(() => {
    try {
      const getMyTimeSheet = async () => {
        const response = await axios.get(
          `http://localhost:4000/performance/${user_id}`
        );
        console.log("response", response);
        if (Array.isArray(response.data)) setMyPerformance(response.data);
        if (response.data.message) setNoMyPerformance(true);
      };
      getMyTimeSheet();
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {MyPerformance && (
        <div className="col-12">
          <div className="table-responsive my-3">
            <table className="table  table-bordered table-hover text-center ">
              <thead className="table-primary">
                <tr>
                  <th scope="col">S NO</th>
                  <th scope="col">Assigner</th>
                  <th scope="col">goal</th>
                  <th scope="col">objective</th>
                  <th scope="col">status</th>
                  <th scope="col">Assigned Date</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Comments</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {MyPerformance.map((value, index) => {
                  return (
                    <TableRow
                      MyPerformance={value}
                      key={value.peff_id}
                      sno={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {NoMyPerformance && (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
          <h5 className=" my-5 mx-5 text-info text-center ">
            No Performance Assigned
          </h5>
        </div>
      )}
    </>
  );
};

export default MyPerformance;

const TableRow = (props) => {
  const { MyPerformance, sno } = props;
  function splitingTime(t) {
    let Y, M, D;
    Y = t.slice(0, 4);
    M = t.slice(5, 7);
    D = t.slice(8, 10);
    return [D, "-", M, "-", Y];
  }
  return (
    <>
      <tr>
        <th scope="row">{sno + 1}</th>
        <td>
          <span className="text-muted"> ({MyPerformance.assigner_id})</span> -
          {MyPerformance.AssignerName}
        </td>
        <td>{MyPerformance.goal}</td>
        <td>{MyPerformance.objective}</td>
        <td>{MyPerformance.status}</td>
        <td>{splitingTime(MyPerformance.assigned_date)}</td>
        <td>{splitingTime(MyPerformance.due_date)}</td>
        <td>{MyPerformance.comments}</td>
      </tr>
    </>
  );
};
