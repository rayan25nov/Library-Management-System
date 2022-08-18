import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./modules/Admin/Admin";
const App = () => {
  return (
    <Router>
      <Admin />
    </Router>
  );
};

export default App;
