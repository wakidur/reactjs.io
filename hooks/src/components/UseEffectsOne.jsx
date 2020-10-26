import React, { useState, useEffect } from 'react';

const UseEffectsOne = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fatchJsonplaceholder = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const responseJson = await response.json();
      setUser(responseJson[0]);
    };
    fatchJsonplaceholder();
  }, [searchQuery]);

  useEffect(() => {
    const fatchAllUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const resJson = await res.json();
      setUsers(resJson);
    };
    fatchAllUsers();
  }, [users]);
  return (
    <div>
      <input
        type='search'
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <br />
      {user && user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.name}</h3>
        </div>
      ) : (
        <p>No user found</p>
      )}

      <br />

      {users &&
        users.map((user) => {
          return (
            <div key={user.name}>
              <p>{user.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default UseEffectsOne;
