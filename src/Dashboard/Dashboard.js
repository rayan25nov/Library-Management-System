import React from "react";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import "./Dashboard.css";
import Data from "../data/db.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="body">
      <div className="app">
        <Header />
        <div className="app-body">
          <div className="app-body-main-content">
            <div className="tiles">
              <Link to="/adminlogin" className="tile">
                <div className="tile-header">
                  <h3>
                    <DoubleArrowSharpIcon />
                    <span>Login As Admin</span>
                  </h3>
                </div>
              </Link>
              <Link to="/adminlogin" className="tile">
                <div className="tile-header">
                  <h3>
                    <DoubleArrowSharpIcon />
                    <span>Login As Guest</span>
                  </h3>
                </div>
              </Link>
              <Link to="/adminlogin" className="tile">
                <div className="tile-header">
                  <h3>
                    <DoubleArrowSharpIcon />
                    <span>Login As Staff</span>
                  </h3>
                </div>
              </Link>
            </div>

            <section className="transfer-section">
              <div className="transfer-section-header">
                <h2>Most Searched Books</h2>
              </div>

              <table className="content-table">
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
                    <tbody className="content-body">
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
    </div>
  );
};

export default Dashboard;
