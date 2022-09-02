import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import User from "./components/users/User";
import Admin from "./components/admin/Admin";
import Staff from "./components/staff/Staff";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/adminlogin" element={<Admin />} />
      <Route path="/stafflogin" element={<Staff />} />
      <Route path="/userlogin" element={<User />} />
    </Routes>
  );
};

export default App;
