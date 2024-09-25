import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetUser.css'; // Make sure this path is correct

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedUserName, setEditedUserName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/Register/getall");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
    setEditedUserName(user.firstName); 
    setEditedEmail(user.email);
  };

  const cancelEdit = () => {
    setEditingUser(null);
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:5000/api/v1/Register/edit/${editingUser._id}`, {
        firstName: editedUserName,
        email: editedEmail,
      });
      alert("User details updated successfully");
      fetchUsers();
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
      alert("Failed to update user details");
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/Register/delete/${userId}`);
      alert("User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert("Failed to delete user");
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <a href="#">
          <svg 
            id="logo-15" 
            width="49" 
            height="48" 
            viewBox="0 0 49 48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" 
              className="ccustom" 
              fill="#17CF97"
            />
            <path 
              d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" 
              className="ccustom" 
              fill="#17CF97"
            />
            <path 
              d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" 
              className="ccustom" 
              fill="#17CF97"
            />
            <path 
              d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" 
              className="ccustom" 
              fill="#17CF97"
            />
          </svg>
        </a>       
        <div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li><a href="/admin">Back</a></li>
            <li><a href="/home">Logout</a></li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>

      <div>
        <br />
        <table className="table table-dark" align="center">
          <thead>
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.firstName}</td> 
                <td>{user.email}</td>
                <td>
                  <button 
                    type="button" 
                    className="btn btn-warning" 
                    onClick={() => editUser(user)}
                  >
                    Edit
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingUser && (
          <div className="edit-user-modal">
            <h2>Edit User</h2>
            <label>
              User Name: 
              <input 
                type="text" 
                value={editedUserName} 
                onChange={(e) => setEditedUserName(e.target.value)} 
              />
            </label>
            <label>
              Email: 
              <input 
                type="email" 
                value={editedEmail} 
                onChange={(e) => setEditedEmail(e.target.value)} 
              />
            </label>
            <button onClick={updateUser} className="btn btn-warning">Save Changes</button>
            <button onClick={cancelEdit} className="btn btn-danger">Cancel</button>
          </div>
        )}
      </div>
    </>
  );
};

export default GetUsers;
