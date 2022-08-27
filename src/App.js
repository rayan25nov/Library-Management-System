import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Admin from "./modules/Admin/Admin";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/adminlogin" element={<Admin />} />
    </Routes>
  );
};

export default App;
