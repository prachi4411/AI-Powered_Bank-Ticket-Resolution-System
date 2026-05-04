import BASE_URL from "./api";
import { authHeaders } from "./api";

// CREATE TICKET
export const createTicket = async (data) => {
  const res = await fetch(`${BASE_URL}/api/tickets`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);

  return result;
};

// GET ALL TICKETS
export const getTickets = async () => {
  const res = await fetch(`${BASE_URL}/api/tickets`, {
    headers: authHeaders()
  });
  if (!res.ok) throw new Error("Failed to fetch tickets");
  return res.json();
};

// RESOLVE TICKET
export const resolveTicket = async (id) => {
  const res = await fetch(`${BASE_URL}/api/tickets/${id}`, {
    method: "PUT",
    headers: authHeaders()
  });

 // 🔥 FIX: handle empty response
  if (!res.ok) {
    throw new Error("Failed to resolve ticket");
  }

  return true; // no JSON expected
};