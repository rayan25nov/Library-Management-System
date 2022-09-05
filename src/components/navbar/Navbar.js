import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.Navbar}`}>
      <span className={styles.nav_logo}>{props.title}</span>
      <div className={`${styles.nav_items} ${isOpen && styles.open}`}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Link className={styles.link} to="/service">
          Service
        </Link>
        <Link className={styles.link} to="/contact">
          Contact
        </Link>
      </div>
      <div
        className={`${styles.nav_toggle} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Navbar;
