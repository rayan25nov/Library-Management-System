import "./Admin.css";

import AdminBackground from "./AdminDetails/AdminBackground";
import AdminForm from "./AdminDetails/AdminForm";

const Admin = () => {
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <h1 className="heading">New Book Entry</h1>
          <AdminForm />
        </div>
        <div className="screen__background">
          <AdminBackground />
        </div>
      </div>
    </div>
  );
};

export default Admin;
