import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";
const Employee = () => {
  const [Myprofile, setMyprofile] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/allEmployee`
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

export default Employee;
