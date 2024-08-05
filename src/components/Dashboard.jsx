import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h1>My Dashboard</h1>
        <div className="card">
          <h2>Card 1</h2>
          <p>This is some content for Card 1.</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>This is some content for Card 2.</p>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>This is some content for Card 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
