import React, { useState } from "react";
import { registerUser, loginUser } from "../services/authService";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    mobNumber: "",
    adharNumber: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const res = await loginUser(form);
        alert("Login Success");
        localStorage.setItem("token", res.token);
      } else {
        await registerUser(form);
        alert("Registered Successfully");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.message || "Error");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* LEFT SIDE */}
      <div style={{ flex: 1, background: "#f5f7fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/illustration.png" alt="illustration" width="80%" />
      </div>

      {/* RIGHT SIDE */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "50px" }}>
        
        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        {!isLogin && (
          <>
            <input
              name="mobNumber"
              placeholder="Mobile Number"
              onChange={handleChange}
            />

            <input
              name="adharNumber"
              placeholder="Aadhar Number"
              onChange={handleChange}
            />
          </>
        )}

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer", marginTop: "10px" }}>
          {isLogin ? "New user? Register" : "Already have account? Login"}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;