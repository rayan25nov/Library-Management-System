import React from "react";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import styles from "./Dashboard.module.css";
import Data from "../data/db.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className={styles.body}>
      <div className={styles.app}>
        <Header />
        <div className={styles.app_body}>
          <div className={styles.tiles}>
            <Link to="/adminlogin" className={styles.tile}>
              <div className={styles.tile_header}>
                <h3>
                  <DoubleArrowSharpIcon />
                  <span>Login As Admin</span>
                </h3>
              </div>
            </Link>
            <Link to="/userlogin" className={styles.tile}>
              <div className={styles.tile_header}>
                <h3>
                  <DoubleArrowSharpIcon />
                  <span>Login As Guest</span>
                </h3>
              </div>
            </Link>
            <Link to="/stafflogin" className={styles.tile}>
              <div className={styles.tile_header}>
                <h3>
                  <DoubleArrowSharpIcon />
                  <span>Login As Staff</span>
                </h3>
              </div>
            </Link>
          </div>

          <section className={styles.books}>
            <div className={styles.books_header}>
              <h2>Most Searched Books</h2>
            </div>

            <table className={styles.content_table}>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Book's Name</th>
                  <th>Author's Name</th>
                  <th>Rating</th>
                </tr>
              </thead>
              {Data.map((data, index) => {
                return (
                  <tbody className={styles.content_body} key={data.id}>
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.book_name}</td>
                      <td>{data.authors_name}</td>
                      <td>{data.rating}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
