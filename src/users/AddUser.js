import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (username.trim() === "") {
      validationErrors.username = "Username is required";
    }

    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUser({ name: "", username: "", email: "" });
    setErrors({});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(e);

    try {
      await axios.post("/user", user);
      console.log("Form submitted successfully");
      navigate("/home");
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded-3 p-4 mt-2 shadow-lg">
          <form onSubmit={onSubmit}>
            <h2 className="text-center mb-4">Register User</h2>

            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name && "is-invalid"}`}
                id="name"
                value={name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username && "is-invalid"}`}
                id="username"
                value={username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="email"
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-outline-primary mx-2">
                Submit
              </button>
              <Link to="/home" className="btn btn-outline-danger mx-2">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
