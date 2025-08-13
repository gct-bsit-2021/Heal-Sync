import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);  // Loading spinner or button text
  const [serverError, setServerError] = useState("");  // Show backend errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate inputs locally before sending to backend
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send data to backend on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");  // reset server error

    if (validate()) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/patients/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Important: backend expects fullName, email, password
          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Signup Successful!");
          console.log("User Data:", data);
          // Clear form on success
          setFormData({ name: "", email: "", password: "", confirmPassword: "" });

          // TODO: Redirect user after signup if you want
          // e.g., window.location.href = "/login";
        } else {
          // Show error message from backend (e.g., email already taken)
          setServerError(data.message || "Signup failed");
        }
      } catch (error) {
        setServerError("Network error. Please try again.");
        console.error("Signup error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        {/* Show backend error message if any */}
        {serverError && <p className="error">{serverError}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="login-text" style={{ color: "#EAEBD0" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
