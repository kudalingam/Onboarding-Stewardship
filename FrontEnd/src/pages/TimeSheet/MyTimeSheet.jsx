import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const MyTimeSheet = ({ authvar }) => {
  const [MyTimeSheet, setMyTimeSheet] = useState([]);
  const [NoMyTimeSheet, setNoMyTimeSheet] = useState(false);
  const user_id = sessionStorage.getItem("user_id");
  useEffect(() => {
    try {
      const getMyTimeSheet = async () => {
        const response = await axios.get(
          `http://localhost:4000/timeSheet/${user_id}`
        );
        if (Array.isArray(response.data)) setMyTimeSheet(response.data);
        if (response.data.message) setNoMyTimeSheet(true);
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
      {MyTimeSheet && (
        <div className="col-12">
          <div className="table-responsive my-3">
            <table className="table  table-bordered table-hover text-center ">
              <thead className="table-primary">
                <tr>
                  <th scope="col">S NO</th>
                  <th scope="col">Month</th>
                  <th scope="col">Year</th>
                  <th scope="col">No Working Days</th>
                  <th scope="col">No Of Off Days</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {MyTimeSheet.map((value, index) => {
                  return (
                    <TableRow
                      MyTimeSheet={value}
                      key={value.Sheet_id}
                      sno={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {NoMyTimeSheet && (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
          <h5 className=" my-5 mx-5 text-info text-center ">
            No Leave Approved
          </h5>
        </div>
      )}
    </>
  );
};

export default MyTimeSheet;

const TableRow = (props) => {
  const { MyTimeSheet, sno } = props;
  return (
    <>
      <tr>
        <th scope="row">{sno + 1}</th>
        <td>{MyTimeSheet.MonthYear.slice(5, 7)}</td>
        <td>{MyTimeSheet.MonthYear.slice(0, 4)}</td>
        <td>{MyTimeSheet.Total_days_of_work}</td>
        <td>{MyTimeSheet.Total_days_of_leave}</td>
      </tr>
    </>
  );
};
