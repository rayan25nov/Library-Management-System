import React from "react";
import styles from "./Dashboard.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.app_header}>
        <div className={styles.app_header_logo}>
          <div className={styles.logo}>
            <span className={styles.logo_icon}>
              <img src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?w=740&t=st=1660908696~exp=1660909296~hmac=9a7a608c079cdba2021bc8fdd9aaa0b5c16af3256181a00ad51acbfa0556b2e5" alt="Logo_icon"/>
            </span>
            <h1 className={styles.logo_title}>
              <span>Library System</span>
            </h1>
          </div>
        </div>

        <div className={styles.app_header_actions}>
          <div className={styles.user_profile}>
            <span>Rayan Ahmad</span>
            <span>
              <img src="https://avatars.githubusercontent.com/u/79319624?s=400&u=d873bf83f2d335b837b051c654e77253ec5cc1d8&v=4"
              alt="Profile_pic" />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
