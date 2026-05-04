import React, { useState } from "react";
import { loginUser } from "../services/authService";
import { setToken } from "../utils/token";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Login() {

  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);

      const token = res.token || res.data?.token;
const role = res.role || res.data?.role;

      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);

      console.log("ROLE:", res.role); // 🔍 debug

      toast.success("Login successful ✅");

     //  role-based navigation
      if (res.role === "ROLE_ADMIN") {
         console.log("Navigating to admin...");
        navigate("/admin/dashboard");
      } else {
         console.log("Navigating to user...");
        navigate("/user/dashboard");
      }

    } catch (err) {
       toast.error(err.message || "Login failed ❌");
    }
  };




 return (
    <Layout isAuth={true}>
      <div className="auth-card">

        <form onSubmit={(e) => {
    e.preventDefault();
    handleLogin();
  }}>

        <div className="logo">For Your Service</div>
        <div className="title">Welcome Back</div>
        <div className="subtitle">
          Login to continue your journey
        </div>

        <div className="input-group">
          <span className="input-icon">📧</span>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <span className="input-icon">🔒</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="auth-btn" >
          Login
        </button>

        <div className="switch-link">
          Don’t have account? <Link to="/register">Register</Link>
        </div>
        </form>
      </div>
     
    </Layout>
  );
}

export default Login;