import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Sidebar from "../../../Components/Sidebar";
import "../../../Components/Css/style.css";
const user_id = sessionStorage.getItem("user_id");

const Schedule = ({ authvar }) => {
  const [Schedule, setSchedule] = useState([]);
  const [NoSchedule, setNoSchedule] = useState(false);

  useEffect(() => {
    try {
      const getSchedule = async () => {
        const response = await axios.get(
          `http://localhost:4000/schedule/${user_id}`
        );
        if (Array.isArray(response.data)) setSchedule(response.data);
        if (response.data.message) setNoSchedule(true);
      };
      getSchedule();
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);
  if (!authvar) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Navbar />
      <div className="row learn">
        <div
          style={{ backgroundColor: "#15a2fa" }}
          className="col-3 learn-left d-flex align-items-center justify-content-center"
        >
          <Sidebar active={"Schedule"} />
        </div>
        <div className="col-9 learn-right">
          <div className="row my-4 px-2 text-center sticky">
            <h3>Schedule</h3>
            <div className="row d-flex justify-content-around mt-3 gap-1">
              <div className="col-3 p-2 rounded bg-info cursor text-center link1">
                My Schedule
              </div>
            </div>
          </div>
          <div
            className="row text-center"
            style={{ backgroundColor: "#e5e5e5" }}
          >
            {Schedule &&
              Schedule.map((value) => {
                return (
                  <MySchedule
                    Meeting_link={value.Meet_link}
                    Time={value.Time}
                    key={value.schedule_id}
                  />
                );
              })}
            {NoSchedule && (
              <div className="d-flex justify-content-center align-items-center h-100 w-100 my-5 mx-5">
                <h5 className=" my-5 mx-5 text-info text-center ">
                  Schedule Not Available
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;

const MySchedule = ({ Meeting_link, Time }) => {
  let history = useHistory();
  let days, hours, minutes, seconds;
  function splitingTime(t) {
    let Y, M, D, hours, minutes, strTime;
    Y = t.slice(0, 4);
    M = t.slice(5, 7);
    D = t.slice(8, 10);
    hours = t.slice(11, 13);
    minutes = t.slice(14, 16);
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours % 12 ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    strTime = hours + ":" + minutes + " " + ampm;

    return [strTime, [D, "-", M, "-", Y]];
  }

  function CountDown(Time) {
    // Set the date we're counting down to
    let countDownDate = new Date(Time).getTime();
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
      try {
        const deleteSchedule = async () => {
          const response = await axios.delete(
            `http://localhost:4000/schedule/delete/${user_id}`
          );
          history.push("/Dashboard");
        };
        deleteSchedule();
      } catch (error) {
        console.log(error);
      }
    }
  }

  const [Count, setCount] = useState(0);

  useEffect(() => {
    let timer = null;
    if (Time) {
      timer = setInterval(() => {
        setCount((Count) => Count - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [Time]);
  return (
    <>
      <h1 className="text-center m-4">
        <a
          className="text-center link1"
          style={{ fontSize: "30px", color: "green" }}
          href={Meeting_link}
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1245px-Google_Meet_icon_%282020%29.svg.png"
            alt="logo"
            width="50px"
            height="50px"
            className="me-2 link1"
          />
          {Meeting_link}
        </a>
        <div className="row m-5 justify-content-around">
          <div className="col-6">
            <i style={{ color: "blue" }} class="far fa-calendar-alt px-2" />
            {splitingTime(Time)[1]}
          </div>
          <div className="col-6">
            <i style={{ color: "green" }} class="far fa-clock px-2" />
            {splitingTime(Time)[0]}
          </div>
        </div>

        {CountDown(Time)}
        <div className="row d-flex justify-content-around m-5">
          <div className="card col-2">
            <h3 className="pt-1">DAYS</h3>
            <div style={{ color: "green" }} className="card-body">
              {days}
            </div>
          </div>
          <div className="card col-2">
            <h4 className="pt-1">HOURS</h4>
            <div style={{ color: "green" }} className="card-body">
              {hours}
            </div>
          </div>
          <div className="card col-2">
            <h4 className="pt-1">MINUTES</h4>
            <div style={{ color: "green" }} className="card-body">
              {minutes}
            </div>
          </div>
          <div className="card col-2">
            <h4 className="pt-1">SECONDS</h4>
            <div style={{ color: "green" }} className="card-body">
              {seconds}
            </div>
          </div>
        </div>
      </h1>
    </>
  );
};

// const Timer = (days) => {
//   return (
//     <div>
//       <h1>{days}</h1>
//     </div>
//   );
// };

// import { useState, useEffect } from "react";
// import React from "react";

// const Schedule = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [Results, setResults] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://opentdb.com/api.php?amount=25&category=9&difficulty=hard&type=multiple"
//     )
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setResults(result.results);
//         },

//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <>
//         {Results && (
//           <div className="col-12">
//             <div className="table-responsive my-3">
//               <table className="table  table-bordered table-hover text-center ">
//                 <thead className="table-primary">
//                   <tr>
//                     <th scope="col">S NO</th>
//                     <th scope="col">Questions</th>
//                     <th scope="col">Answer</th>
//                     <th scope="col">Option</th>
//                     <th scope="col">Option</th>
//                     <th scope="col">Option</th>
//                   </tr>
//                 </thead>
//                 <tbody className="table-light">
//                   {Results.map((value, index) => {
//                     // let question = Results.question;
//                     // console.log(question);
//                     return <TableRow Results={value} sno={index} />;
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
// };

// export default Schedule;
// const TableRow = (props) => {
//   const { Results, sno } = props;
//   return (
//     <>
//       <tr>
//         <th scope="row">{sno + 1}</th>
//         <td>{Results.question}</td>
//         <td>{Results.correct_answer}</td>
//         <td>{Results.incorrect_answers[0]}</td>
//         <td>{Results.incorrect_answers[1]}</td>
//         <td>{Results.incorrect_answers[2]}</td>
//       </tr>
//     </>
//   );
// };
