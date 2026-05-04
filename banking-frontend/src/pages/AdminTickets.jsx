import React, { useEffect, useState } from "react";
import { getTickets, resolveTicket } from "../services/ticketService";
import MainLayout from "../components/layout/MainLayout";
import { toast } from "react-toastify";

function AdminTickets() {

  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const loadTickets = () => {
    getTickets().then(setTickets);
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const handleResolve = async (id) => {
    await resolveTicket(id);
    try {
    await resolveTicket(id);
    toast.success("Ticket resolved ✅");
    loadTickets();
  } catch (err) {
    toast.error("Failed to resolve ticket ❌");
  }
};
  //  Filter logic
  const filteredTickets = tickets.filter(t => {
    if (filter === "ALL") return true;
    return t.status === filter;
  });

  return (
    <MainLayout role="ADMIN">

      <h2 style={{ marginBottom: "20px",color: "#1e293b"}}>Ticket Management</h2>

      {/* FILTER BUTTONS */}
      <div style={filterBox}>
        <button onClick={() => setFilter("ALL")} style={btn}>All</button>
        <button onClick={() => setFilter("OPEN")} style={btn}>Open</button>
        <button onClick={() => setFilter("RESOLVED")} style={btn}>Resolved</button>
      </div>

      {/* TICKET GRID */}
      <div style={grid}>
        {filteredTickets.length === 0 ? (
          <p>No tickets found</p>
        ) : (
          filteredTickets.map(t => (
            <div key={t.id} style={card}>

              <p style={{ fontWeight: "bold" }}>{t.description}</p>

              <p>
                Status:{" "}
                <span style={{
                  color: t.status === "OPEN" ? "orange" : "green",
                  fontWeight: "bold"
                }}>
                  {t.status}
                </span>
              </p>

              {t.status === "OPEN" && (
                <button
                  onClick={() => handleResolve(t.id)}
                  style={resolveBtn}
                >
                  Resolve
                </button>
              )}

            </div>
          ))
        )}
      </div>

    </MainLayout>
  );
}

const filterBox = {
  marginBottom: "20px",
  display: "flex",
  gap: "10px"
};

const btn = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const card = {
  background: "white",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
};

const resolveBtn = {
  marginTop: "10px",
  padding: "8px",
  background: "#22c55e",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default AdminTickets;