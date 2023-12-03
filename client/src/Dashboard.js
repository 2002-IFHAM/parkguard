import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="heading">
        <span className="mssg">Hello, </span>
      </div>
      <div className="contents">
        <div id="profile">
          <h1>PROFILE</h1>
        </div>
        <div id="feedback">
          <h1>FEEDBACK</h1>
        </div>
        <div id="complaint">
          <h1>COMPLAINT</h1>
        </div>
        <div id="report">
          <h1>REPORT</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
