import { useEffect, useState } from "react";
const searchone = () => {
  const { users, setUsers } = useState({});
  const { search, useSearch } = useState("");

  const URL = "";

  const showData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setUsers(data);
  };

    return (
    
  )
};
export default searchone;