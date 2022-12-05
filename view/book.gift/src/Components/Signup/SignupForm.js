import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email using a regular expression
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email address");
      return;
    }

    try {
      const response = await axios.post("/api/users", {
        firstName,
        lastName,
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="signup-text">
        <h1 className="signup-text-content">
          We're excited to have you join <br />
          our community of <span className="creator">CREATORS</span>
        </h1>
      </div>
      <div className="form_area">
        <h3 className="title">Let's get started 🎈</h3>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label className="sub_title">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form_style"
            />
          </div>
          <div className="form_group">
            <label className="sub_title">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form_style"
            />
          </div>
          <div className="form_group">
            <label className="sub_title">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form_style"
            />
          </div>
          <div className="form_group">
            <label className="sub_title">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form_style"
            />
          </div>
          <div className="form_group">
            <label className="sub_title">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form_style"
            />
          </div>
          <div className="button">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
