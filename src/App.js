import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Home from "./components/Home";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import ConnectData from "./components/ConnectData";
import FailedReq from "./components/FailedReqChart";
import Letancy from "./components/LetancyChart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/D1" element={<Dashboard1 />} />
            <Route path="/D2" element={<Dashboard2 />} />
            <Route path="/Connect" element={<ConnectData />} />
            <Route path="/chart" element={<ConnectData />} />
            <Route path="/failed" element={<FailedReq />} />
            <Route path="/Letancy" element={<Letancy />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
