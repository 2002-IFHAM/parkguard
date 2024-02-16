import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import ComplaintPage from "./ComplaintPage";
import FeedbackPage from "./FeedbackPage";
import Profile from "./Profile";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8083/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);

    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <div className="App">
          {authState && <button onClick={logout}>Logout</button>}

          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/complaint" element={<ComplaintPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
export default App;
