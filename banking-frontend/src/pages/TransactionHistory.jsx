import React, { useEffect, useState } from "react";
import { getTransactions } from "../services/transactionService";
import MainLayout from "../components/layout/MainLayout";

function TransactionHistory() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions()
      .then(setTransactions)
      .catch(err => alert(err.message));
  }, []);

  return (
    <MainLayout role="USER">

      <h2 style={{ marginBottom: "20px", color: "#1e293b" }}>Transaction History</h2>

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

    </MainLayout>
  );
}
const row = {
  borderBottom: "1px solid #f1f5f9"
};

const badge = {
  padding: "6px 12px",
  borderRadius: "8px",
  fontSize: "12px",
  fontWeight: "600"
};
const table = {
  width: "100%",
  background: "white",
  borderCollapse: "collapse",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
};

export default TransactionHistory;