import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [logindata, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log(logindata);
  console.log(logindata.username);
  console.log(logindata.password);

  const loginbutton = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("userData"));
    if (
      user.username === logindata.username &&
      user.password === logindata.password
    ) {
      navigate("/p");
      alert("login success");
    }else{
        alert("Login Failed")
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={loginbutton} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Enter Username:</label>
            <input
              type="text"
              id="username"
              onChange={(e) =>
                setLoginData({ ...logindata, username: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                setLoginData({ ...logindata, password: e.target.value })
              }
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
