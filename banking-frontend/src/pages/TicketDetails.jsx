import React, { useEffect, useState } from "react";
import BASE_URL from "../services/api";
import { getToken } from "../utils/token";
import { useParams } from "react-router-dom";

function TicketDetails() {

  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [aiResponse, setAiResponse] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/tickets/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
    .then(res => res.json())
    .then(data => setTicket(data));
  }, [id]);

  const getAI = async () => {
    const res = await fetch(`${BASE_URL}/ai/resolve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify({ ticketId: id })
    });

    const data = await res.json();
    setAiResponse(data.response);
  };

  if (!ticket) return <p>Loading...</p>;

  return (
    <div>
      <h2>{ticket.issueType}</h2>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>

      <button onClick={getAI}>Get AI Resolution</button>

      <p>{aiResponse}</p>
    </div>
  );
}

export default TicketDetails;