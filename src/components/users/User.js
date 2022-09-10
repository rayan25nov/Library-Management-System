import React, { useState } from "react";
import styles from "./User.module.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const User = () => {
  const [loginOrRegister, setloginOrRegister] = useState("");
  const [signUpInSmall, setSignUpInSmall] = useState("");

  // Toggling between SignIn and SignUp in Full Screen
  const signUpHandler = () => {
    let classes = styles.right_panel_active;
    setloginOrRegister(classes);
  };
  const signInHandler = () => {
    setloginOrRegister("");
  };
  // Toggling between SignIn and SignUp in Small Screen
  const SignUpInSmallScreen = (e) => {
    e.preventDefault();
    let classes = styles.right_panel_active;
    setSignUpInSmall(classes);
  };

  return (
    <div>
      <Navbar title="User" />
      <div className={styles.user_background}>
        <div className={`${styles.container} ${loginOrRegister}`}>
          <div
            className={`${styles.form_container} ${styles.sign_up_container} ${styles.toggle}`}
          >
            <form className={styles.form}>
              <h1 className={styles.heading}>Create Account</h1>
              <input className={styles.input} type="text" placeholder="Name" />
              <input
                className={styles.input}
                type="text"
                placeholder="Student ID"
              />
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
              />
              <button className={styles.button}>Sign Up</button>
            </form>
          </div>
          <div
            className={`${styles.form_container} ${styles.sign_in_container}`}
          >
            <form className={styles.form}>
              <h1 className={styles.heading}>Sign in</h1>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
              />
              <Link className={styles.link} to={"/"}>
                Forgot your password?
              </Link>
              <button className={styles.button}>Sign In</button>
              <button
                className={`${styles.button} ${styles.disappear} ${signUpInSmall}`}
                onClick={SignUpInSmallScreen}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className={styles.overlay_container}>
            <div className={styles.overlay}>
              <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
                <h1 className={styles.heading}>Welcome Back!</h1>
                <p className={styles.para}>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className={`${styles.ghost} ${styles.button}`}
                  onClick={signInHandler}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`${styles.overlay_panel} ${styles.overlay_right}`}
              >
                <h1 className={styles.heading}>Hello, Friend!</h1>
                <p className={styles.para}>
                  Enter your personal details and start journey with us
                </p>
                <button
                  className={`${styles.ghost} ${styles.button}`}
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
