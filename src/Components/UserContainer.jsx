import React, { useState } from 'react';

const UserContainer = ({ users, setUsers }) => {

  const deleteHandler = (id) => {
    const updatedUser = users.filter((user) => user.id !== id)
    setUsers(updatedUser)
  }
  
  const updateUser = (user) => {
    console.log('Requested  for ', user.name);
  }

  return (
    <div className="w-full h-[65%] md:h-[50%] lg:h-[52%] p-4 overflow-y-auto">
      {users.length === 0 ? (
        <h2 className='mt-2 text-red-500 font-semibold'>No More Users</h2>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-2 border-gray-500 p-2">S.No</th>
              <th className="border-2 border-gray-500 p-2">Name</th>
              <th className="border-2 border-gray-500 p-2">Email</th>
              <th className="border-2 border-gray-500 p-2">Contact</th>
              <th className="border-2 border-gray-500 p-2">Update</th>
              <th className="border-2 border-gray-500 p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className='text-center' key={user.id}>
                <td className="border-2 border-gray-500 p-2">{index + 1}</td>
                <td className="border-2 border-gray-500 p-2">{user.name}</td>
                <td className="border-2 border-gray-500 p-2">{user.email}</td>
                <td className="border-2 border-gray-500 p-2">+91 {user.number}</td>
                <td className="border-2 border-gray-500 p-2">
                  <button className="bg-green-600 text-white px-2 py-1 rounded" onClick={() => updateUser(user)}>Update</button>
                </td>
                <td className="border-2 border-gray-500 p-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteHandler(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserContainer;

