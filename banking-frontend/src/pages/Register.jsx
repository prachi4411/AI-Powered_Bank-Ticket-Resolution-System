import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    mobNumber: "",
    adharNumber: ""
  });
     //  handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


//  register API call
const handleRegister = async () => {
    try {
       console.log("FORM DATA:", form); 
      await registerUser(form);
      toast.success("Registered successfully 🎉");

      navigate("/");//redirect to login
    } catch (err) {
      if (form.adharNumber.length !== 12) {
  toast.error("Aadhar must be 12 digits");
  return;
}

if (form.mobNumber.length !== 10) {
  toast.error("Mobile must be 10 digits");
  return;
}
      toast.error(err.message || "Registration failed ❌");
    }
  };

  return (
    <Layout isAuth={true}>
      <div className="auth-card">

        {/* ✅ FORM START */}
        <form onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}>

       
        <div className="title">Create Account</div>
        <div className="subtitle">
          Join the platform today
        </div>

        <div className="input-group">
          <span className="input-icon">👤</span>
          <input name="username" placeholder="Username" onChange={handleChange} />
        </div>

       

        <div className="input-group">
          <span className="input-icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              onChange={handleChange}
            />
          </div>

        <div className="input-group">
          <span className="input-icon">📱</span>
          <input name="mobNumber" placeholder="Mobile Number" onChange={handleChange} />
        </div>

        <div className="input-group">
          <span className="input-icon">🪪</span>
          <input name="adharNumber" placeholder="Aadhar Number" onChange={handleChange} />
        </div>

        <button type="submit" className="auth-btn" >
          Sign Up
        </button>

        <div className="switch-link">
          Already have account? <Link to="/">Login</Link>
        </div>
        </form>
      </div>
    </Layout>
  );
}

export default Register;