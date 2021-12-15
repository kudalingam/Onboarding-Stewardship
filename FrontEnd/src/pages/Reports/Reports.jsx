import { Redirect } from "react-router-dom";
const Reports = ({ authvar }) => {
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return <div>Reports</div>;
};

export default Reports;
