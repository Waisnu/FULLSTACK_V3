import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/users");
    setUsers(result.data);
  };

  return (
    <div>
      <div className="container">
        <div className="py-4">
          <div className="table-responsive-md">
            <table className="table table-hover table-bordered border-light-subtle border-5 shadow-lg">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <button type="button" className="btn btn-primary mx-2">
                        Primary
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary mx-2"
                      >
                        Secondary
                      </button>
                      <button type="button" className="btn btn-danger mx-2">
                        Danger
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to="/adduser"
              className="btn btn-success btn-md btn-block"
              style={{ width: "400px" }}
            >
              Add User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
