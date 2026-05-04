import React, { useEffect, useState } from "react";
import { getTransactions } from "../services/transactionService";
import MainLayout from "../components/layout/MainLayout";

function AdminTransactions() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions()
      .then(setTransactions)
      .catch(err => console.log(err));
  }, []);

  return (
    <MainLayout role="ADMIN">

      <h2 style={{ marginBottom: "20px", color: "#1e293b" }}>All Transactions</h2>

      <div style={container}>

        {transactions.length === 0 ? (
          <p>No transactions found</p>
        ) : (

          <table style={table}>
            <thead>
              <tr>
                <th>Account</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t, i) => (
                <tr key={i} style={row}>

                  <td>{t.accountNumber}</td>

                  <td>
                    <span style={{
                      ...badge,
                      background: t.message === "CREDIT" ? "#e8f5e9": "#fdecea",
                      color: t.message === "CREDIT" ? "#2e7d32" : "#c62828"
                    }}>
                      {t.message}
                    </span>
                  </td>

                  <td style={{
                    color: t.message === "CREDIT" ? "green" : "red",
                    fontWeight: "bold"
                  }}>
                    ₹{t.amount}
                  </td>

                  <td>
                    <span style={{
                      ...badge,
                      background: t.status === "SUCCESS" ? "#e8f5e9" : "#ffebee",
                      color: t.status === "SUCCESS" ? "#2e7d32" : "#c62828"
                    }}>
                      {t.status}
                    </span>
                  </td>

                  <td>
                    {t.createdAt
                      ? new Date(t.createdAt).toLocaleString()
                      : "N/A"}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

        )}

      </div>

    </MainLayout>
  );
}

export default AdminTransactions;

const container = {
  background: "#f9fafb",
  padding: "20px",
  borderRadius: "10px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "white",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const row = {
  borderBottom: "1px solid #eee"
};

const badge = {
  padding: "5px 10px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "bold"
};