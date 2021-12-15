import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";
const Manager = () => {
  const [Myprofile, setMyprofile] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        let userType = "Manager";
        const response = await axios.get(
          `http://localhost:4000/user/allManager`,
          userType
        );
        setMyprofile(response.data);
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

export default Manager;
