import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MainLayout({ children, role = "USER" }) {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div style={sidebar}>
        <h2 style={{ marginBottom: "20px" }}>🏦 Bank</h2>

        {role === "USER" && (
          <>
            <Link to="/user/dashboard" style={link}>Dashboard</Link>
            <Link to="/user/transaction" style={link}>Transaction</Link>
            <Link to="/user/history" style={link}>History</Link>
          </>
        )}

        {role === "ADMIN" && (
          <>
            <Link to="/admin/dashboard" style={link}>Dashboard</Link>
            <Link to="/admin/transactions" style={link}>Transactions</Link>
            <Link to="/admin/tickets" style={link}>Tickets</Link>
          </>
        )}

        <button onClick={logout} style={logoutBtn}>Logout</button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, background: "#f8fafc", padding: "20px" }}>
        <div style={header}>
          <h3>Welcome</h3>
        </div>

        {children}
      </div>

    </div>
  );
}

const sidebar = {
  width: "230px",
  background: "#0f172a",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const link = {
  color: "white",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "6px"
};

const logoutBtn = {
  marginTop: "auto",
  padding: "10px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "6px"
};

const header = {
  background: "white",
  padding: "10px",
  borderRadius: "6px",
  marginBottom: "20px"
};

export default MainLayout;