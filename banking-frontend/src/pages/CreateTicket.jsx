import React, { useState } from "react";
import { createTicket } from "../services/ticketService";
import Layout from "../components/layout/Layout";
import "../styles/ticket.css";

function CreateTicket() {

  const [data, setData] = useState({
    issueType: "",
    description: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!data.issueType || !data.description) {
      setMessage("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await createTicket(data);
      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Ticket created successfully");
        setData({ issueType: "", description: "" });
      } else {
        setMessage(result.error || "Failed to create ticket");
      }

    } catch (err) {
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

      <div className="ticket-container">

        <h2>Create Support Ticket</h2>
        <p className="subtitle">Describe your issue and our AI will help you resolve it.</p>

        {/* ISSUE TYPE */}
        <select
          value={data.issueType}
          onChange={(e) => setData({ ...data, issueType: e.target.value })}
        >
          <option value="">Select Issue Type</option>
          <option value="LOGIN">Login Issue</option>
          <option value="PAYMENT">Payment Issue</option>
          <option value="ACCOUNT">Account Issue</option>
          <option value="OTHER">Other</option>
        </select>

        {/* DESCRIPTION */}
        <textarea
          placeholder="Describe your issue in detail..."
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        ></textarea>

        {/* BUTTON */}
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit Ticket"}
        </button>

        {/* MESSAGE */}
        {message && <p className="message">{message}</p>}

      </div>

    </Layout>
  );
}

export default CreateTicket;