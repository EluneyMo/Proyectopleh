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
  
  const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target);
      };
    
  };


  useEffect(() => {
    showData();
  }, []);

  let result = [];
  if (!search) {
    result = users;
  } else {
    users.filter(
      (dato) => dato.name - tolowerCase().includes(search.tolocaleLowerCase())
    );
  }
    return (
    
  )
};
export default searchone;