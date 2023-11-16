import React, { useEffect, useState, ChangeEvent } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  // Agrega otros campos según la estructura de tus datos
}

const SearchOne: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");

  const URL = ""; // Agrega la URL correspondiente

  const showData = async () => {
    const response = await fetch(URL);
    const data: User[] = await response.json();
    console.log(data);
    setUsers(data);
  };

  const searcher = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let result: User[] = [];
  if (!search) {
    result = users;
  } else {
    result = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <input value={search} placeholder="buscar" onChange={searcher} />
      <table>
        <tbody>
          {result.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchOne;

