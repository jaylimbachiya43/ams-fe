'use client'
import React, { useState } from 'react';

const AdminPage = () => {
  const [adminUsers, setAdminUsers] = useState([
    { id: 1, username: 'A', role: 'admin' },
    { id: 2, username: 'B', role: 'admin' },
  ]);

  const [hrUsers, setHrUsers] = useState([
    { id: 3, username: 'C', role: 'hr' },
    { id: 4, username: 'D', role: 'hr' },
  ]);

  const [newUser, setNewUser] = useState({ username: '', role: 'admin' });

  const handleAddUser = () => {
    if (newUser.username) {
      if (newUser.role === 'admin') {
        setAdminUsers([...adminUsers, { id: adminUsers.length + 1, ...newUser }]);
      } else if (newUser.role === 'hr') {
        setHrUsers([...hrUsers, { id: hrUsers.length + 1, ...newUser }]);
      }

      setNewUser({ username: '', role: 'admin' });
    }
  };

  const handleRemoveUser = (userId, role) => {
    if (role === 'admin') {
      const updatedAdminUsers = adminUsers.filter((user) => user.id !== userId);
      setAdminUsers(updatedAdminUsers);
    } else if (role === 'hr') {
      const updatedHrUsers = hrUsers.filter((user) => user.id !== userId);
      setHrUsers(updatedHrUsers);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Management (Admin Page)</h1>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Admin Users:</h2>
          <ul className="space-y-2">
            {adminUsers.map((user) => (
              <li
                key={user.id}
                className="bg-white p-4 rounded shadow-md flex items-center justify-between"
              >
                <div>
                  {user.username} (Role: {user.role})
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveUser(user.id, user.role)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">HR Users:</h2>
          <ul className="space-y-2">
            {hrUsers.map((user) => (
              <li
                key={user.id}
                className="bg-white p-4 rounded shadow-md flex items-center justify-between"
              >
                <div>
                  {user.username} (Role: {user.role})
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveUser(user.id, user.role)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">Add User:</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              className="p-2 border rounded"
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="p-2 border rounded"
            >
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
            </select>
            <button
              onClick={handleAddUser}
              className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
