import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router

function Dashboard() {
  return (
    <div>
      <div className="heading">
        <span className="mssg">Hello, </span>
      </div>
      <div className="contents">
        <Link to="/profile" className="dashboard-button">
          <div id="profile">
            <h1>PROFILE</h1>
          </div>
        </Link>
        <Link to="/feedback" className="dashboard-button">
          <div id="feedback">
            <h1>FEEDBACK</h1>
          </div>
        </Link>
        <Link to="/complaint" className="dashboard-button">
          <div id="complaint">
            <h1>COMPLAINT</h1>
          </div>
        </Link>
        <Link to="/report" className="dashboard-button">
          <div id="report">
            <h1>REPORT</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
