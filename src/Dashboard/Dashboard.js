import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <div className="app-body-main-content">
          <section className="service-section">
            <div className="tiles">
              <Link to="/adminlogin" className="tile">
                <div className="tile-header">
                  <h3>
                    <span>Login As Admin</span>
                  </h3>
                </div>
              </Link>
              <article className="tile">
                <div className="tile-header">
                  <h3>
                    <span>Login As Guest</span>
                  </h3>
                </div>
              </article>
              <article className="tile">
                <div className="tile-header">
                  <h3>
                    <span>Login As Staff</span>
                  </h3>
                </div>
              </article>
            </div>
          </section>
          <section className="transfer-section">
            <div className="transfer-section-header">
              <h2>Latest Books</h2>
            </div>
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
