import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Customer.module.css";
function Customer() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchUsers() {
      const payload = await fetch(`http://localhost:3001/customer/${id}`);
      const data = await payload.json();
      console.log(data);
      setUser(data);
    }
    fetchUsers();
  }, [id]);
  return (
    <div className={styles.container}>
      {!!user.length &&
        user.map((obj) => {
          return (
            <div key={obj.id} className={styles.userInfo}>
              <span>Username: {obj.username}</span>
              <span>Firstname: {obj.firstname}</span>
              <span>Lastname: {obj.lastname}</span>
              <span>Email: {obj.email}</span>
            </div>
          );
        })}
    </div>
  );
}

export default Customer;
