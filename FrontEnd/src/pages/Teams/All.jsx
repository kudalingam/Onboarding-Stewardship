import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";
const userId = sessionStorage.getItem("user_id");
const All = () => {
  const [Myprofile, setMyprofile] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/all/${userId}`
        );
        setMyprofile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <>
      {Myprofile &&
        Myprofile.map((value) => {
          return <TeamCard profile={value} key={value.User_id} />;
        })}
    </>
  );
};

export default All;
