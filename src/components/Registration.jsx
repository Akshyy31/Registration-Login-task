import React, { useState } from "react";

function Registration() {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username:"",
    password: "",
  });

  console.log(register);

  const registerbutton = (e)=>{
    e.preventDefault()
    localStorage.setItem("userData", JSON.stringify(register));
    alert("data stored")
  }

  return (
    <div>
      <div className="form-container">
        <form  onSubmit={registerbutton} className="user-form">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              onChange={(e) => setRegister({ ...register,firstname: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              onChange={(e) => setRegister({ ...register,lastname: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setRegister({...register, email: e.target.value })}
            />
          </div>
           <div className="form-group">
            <label htmlFor="username">userName</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setRegister({...register, username: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setRegister({...register, password: e.target.value })}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
