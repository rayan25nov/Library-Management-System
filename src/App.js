import Dashboard from "./Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import User from "./components/users/User";
import Admin from "./components/admin/Admin";
import Staff from "./components/staff/Staff";
import AddBook from "./modules/book_details/AddBook";
const App = () => {
  return (
    <div>
      {/* Navbar to be added here */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/adminlogin" element={<Admin />} />
        <Route path="/stafflogin" element={<Staff />} />
        <Route path="/userlogin" element={<User />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
};

export default App;
