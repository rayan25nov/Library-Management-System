import React from "react";
import styles from "./Admin.module.css";
import Navbar from "../navbar/Navbar";
const Admin = () => {
  return (
    <div>
      <Navbar title="Admin" />
      <div className={styles.admin_body}>
        <form className={styles.form}>
          <h3>Login Here</h3>

          <label className={styles.label} for="username">
            Username
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Email or Phone"
            id="username"
          />

          <label className={styles.label} for="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            id="password"
          />

          <button className={styles.button}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
