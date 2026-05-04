import React, { useState } from "react";
import { processTransaction } from "../services/transactionService";
import MainLayout from "../components/layout/MainLayout";
import { toast } from "react-toastify";

function TransactionPage() {

  const [form, setForm] = useState({
    accountNumber: "",
    amount: "",
    type: "DEBIT"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
     try {
    const res = await processTransaction(form);

    if (res.status === "SUCCESS") {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }

  } catch (err) {
    toast.error(err.message);
  }
};
  return (
    <MainLayout>

      <h2 style={{color: "#1e293b"}}>Transaction</h2>

      <div style={box}>
        <input name="accountNumber" placeholder="Account Number" onChange={handleChange} />
        <input name="amount" placeholder="Amount" onChange={handleChange} />

        <select name="type" onChange={handleChange}>
          <option value="DEBIT">Debit</option>
          <option value="CREDIT">Credit</option>
        </select>

        <button onClick={handleSubmit}>Submit</button>
      </div>

    </MainLayout>
  );
}

const box = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "300px"
};

export default TransactionPage;