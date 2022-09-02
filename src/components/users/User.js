import React, { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const User = () => {
  const [loginOrRegister, setloginOrRegister] = useState("");

  // Toggling between SignIn and SignUp
  const signUpHandler = () => {
    setloginOrRegister(" right-panel-active");
  };
  const signInHandler = () => {
    setloginOrRegister("");
  };
  return (
    <div>
      <Navbar />
      <div className="user-background">
        <div className={`container${loginOrRegister}`} id="container">
          <div className="form-container sign-up-container">
            <form className="form">
              <h1 className="heading">Create Account</h1>
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="text" placeholder="Student ID" />
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <button className="button">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form">
              <h1 className="heading">Sign in</h1>
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <Link to={"/"}>Forgot your password?</Link>
              <button className="button">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="heading">Welcome Back!</h1>
                <p className="para">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost button"
                  id="signIn"
                  onClick={signInHandler}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="heading">Hello, Friend!</h1>
                <p className="para">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost button"
                  id="signUp"
                  onClick={signUpHandler}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
