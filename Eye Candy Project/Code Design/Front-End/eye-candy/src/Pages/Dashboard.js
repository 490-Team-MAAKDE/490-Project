import React, { useState } from 'react';
import "./Dashboard.css";

function Dashboard() {
  const [userName, setUserName] = useState('');

  // Here you could make API calls to fetch user data and set the state accordingly

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome to your Dashboard, {userName}!</h1>
      <p className="dashboard-subheading">Here you can see all the important information related to your account.</p>
      <div className="dashboard-components">
        <div className="dashboard-component">
          <h2 className="dashboard-component-heading">Component 1</h2>
          <p className="dashboard-component-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="dashboard-component">
          <h2 className="dashboard-component-heading">Component 2</h2>
          <p className="dashboard-component-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="dashboard-component">
          <h2 className="dashboard-component-heading">Component 3</h2>
          <p className="dashboard-component-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
