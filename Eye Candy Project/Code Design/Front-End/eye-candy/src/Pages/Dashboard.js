import React, { useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import './Dashboard.css';
import { UserContext } from '../App';

function Dashboard() {
  const { username } = useContext(UserContext);
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/customers/${username}`).then((response) => {
      setCustomerData(response.data);
    });
  }, [username]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <h1 className="dashboard-heading">
          {username === ''
            ? 'Sign in to access your information'
            : `Welcome to your Dashboard, ${username}`}
          !
        </h1>
        <p className="dashboard-subheading">
          Here you can see all the important information related to your account.
        </p>

        <div className="dashboard-components-container">
          <div className="dashboard-components">
            {customerData.map((customer) => (
              <div className="dashboard-component" key={customer.username}>
                <div className="dashboard-component-heading">
                  <h2>First Name</h2>
                  <p>{customer.username}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-components">
            {customerData.map((customer) => (
              <div className="dashboard-component" key={customer.username}>
                <div className="dashboard-component-heading">
                  <h2>First Name</h2>
                  <p>{customer.firstname}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-components">
            {customerData.map((customer) => (
              <div className="dashboard-component" key={customer.username}>
                <div className="dashboard-component-heading">
                  <h2>Last Name</h2>
                  <p>{customer.lastname}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-components">
            {customerData.map((customer) => (
              <div className="dashboard-component" key={customer.username}>
                <div className="dashboard-component-heading">
                  <h2>Email</h2>
                  <p>{customer.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;