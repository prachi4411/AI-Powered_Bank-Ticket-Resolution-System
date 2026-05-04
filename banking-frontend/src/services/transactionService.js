import BASE_URL from "./api";
import { authHeaders } from "./api";

export const processTransaction = async (data) => {
  const res = await fetch(`${BASE_URL}/api/transactions`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);
  return result;
};

// export const getTransactions = async () => {
//   const res = await fetch(`${BASE_URL}/api/transactions/user`, {
//     method: "GET",
//     headers: authHeaders()
//   });

export const getTransactions = async () => {
  //const role = localStorage.getItem("role");
  // 🔥 FIX: normalize role
  const role = localStorage.getItem("role")?.replace("ROLE_", "");

  console.log("ROLE:", role); // ✅ debug

  const url =
    role === "ADMIN"
      ? `${BASE_URL}/api/transactions/admin`
      : `${BASE_URL}/api/transactions/user`;

  console.log("API URL:", url); // 🔥 ADD THIS

  const res = await fetch(url, {
    method: "GET",
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to fetch transactions");

  return res.json();
};
