import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
