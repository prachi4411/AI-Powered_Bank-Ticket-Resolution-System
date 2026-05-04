import React, { useEffect, useState } from "react";
import { getUserProfile } from "../services/userService";
import MainLayout from "../components/layout/MainLayout";

function UserDashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserProfile()
      .then(setUser)
      .catch(err => alert(err.message));
  }, []);

  if (!user) return <p>Loading...</p>;



 return (
    <MainLayout>

      <h2 style={{color: "#1e293b"}}>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

        <div style={card}>
          <h3>Balance</h3>
          <p>₹ {user.balance}</p>
        </div>

        <div style={card}>
          <h3>Account</h3>
          <p>{user.accountNumber}</p>
        </div>

        <div style={card}>
          <h3>User</h3>
          <p>{user.username}</p>
        </div>

      </div>

    </MainLayout>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "200px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

export default UserDashboard;