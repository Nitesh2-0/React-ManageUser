import React, { useState } from 'react';
import Nav from './Components/Nav';
import CreateUser from './Components/CreateUser';
import UserContainer from './Components/UserContainer';

const App = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div className='bg-gray-800 h-screen w-full text-white'>
      <Nav />
      <UserContainer setUsers={setUsers} users={users} />
      <CreateUser setUsers={setUsers} users={users} />
    </div>
  );
};

export default App;

