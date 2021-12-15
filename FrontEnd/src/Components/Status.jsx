const Status = ({ color, icon, statusName }) => {
  return (
    <small
      className={`card-text float-end text-success badge rounded-pill bg-${color} text-white`}
    >
      {statusName} <i className={`${icon}`}></i>
    </small>
  );
};

export default Status;