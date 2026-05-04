import React, { useEffect, useState } from "react";
import { getTickets } from "../services/ticketService";
import { getTransactions } from "../services/transactionService";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

function AdminDashboard() {

  const [tickets, setTickets] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTickets().then(setTickets).catch(() => {});
    getTransactions().then(setTransactions).catch(() => {});
  }, []);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === "OPEN").length;
  const resolvedTickets = tickets.filter(t => t.status === "RESOLVED").length;

  return (
    <MainLayout role="ADMIN">

      <h2 style={{ marginBottom: "20px",color: "#1e293b"}}>Admin Dashboard</h2>

      {/*  SUMMARY CARDS */}
      <div style={cardContainer}>

        <div style={card}>
          <h4>Total Tickets</h4>
          <h2 style={{color:"black"}}>{totalTickets}</h2>
        </div>

        <div style={card}>
          <h4>Open Tickets</h4>
          <h2 style={{ color: "orange" }}>{openTickets}</h2>
        </div>

        <div style={card}>
          <h4>Resolved Tickets</h4>
          <h2 style={{ color: "green" }}>{resolvedTickets}</h2>
        </div>

        <div style={card}>
          <h4>Total Transactions</h4>
          <h2 style={{color: "black"}}>{transactions.length}</h2>
        </div>

      </div>

      {/*  QUICK ACTIONS */}
      <div style={{ marginTop: "30px" }}>
        <h3>Quick Actions</h3>

        <div style={actionBox}>
          <Link to="/admin/tickets" style={actionBtn}>
            Manage Tickets
          </Link>

          <Link to="/admin/transactions" style={actionBtn}>
            View Transactions
          </Link>
        </div>
      </div>

    </MainLayout>
  );
}

const cardContainer = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  width: "220px"
};

const actionBox = {
  display: "flex",
  gap: "20px",
  marginTop: "15px"
};

const actionBtn = {
  padding: "10px 20px",
  background: "#2563eb",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px"
};

export default AdminDashboard;