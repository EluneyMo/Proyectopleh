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

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target);
  };

  let result = [];
  if (!search) {
    result = users;
  } else {
    users.filter(
      (dato) => dato.name - tolowerCase().includes(search.tolocaleLowerCase())
    );
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <input value={search} placeholder="buscar" />
      <body>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </body>
    </div>
  );
};
export default searchone;
