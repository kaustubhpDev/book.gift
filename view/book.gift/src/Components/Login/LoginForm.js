import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check for the presence of a JWT in local storage
    const token = localStorage.getItem("jwt");
    if (token) {
      // Send a GET request to the home page
      axios
        .get("/api/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // Set the home page HTML to the response data
        });
    }
  }, []);

  // Send a request to the server to get a JWT and go to the home page
  const handleLogin = async () => {
    const res = await axios.post("/api/login", {
      email,
      password,
    });
    const { token } = res.data;

    // Store the JWT in local storage
    localStorage.setItem("jwt", token);

    // Send a GET request to the home page
    const homeRes = await axios.get("/api/home", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Set the home page HTML to the response data
  };

  return (
    <div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
