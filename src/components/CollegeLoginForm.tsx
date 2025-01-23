import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CollegeLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("College Login:", formData);
    alert("College login successful!");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border rounded px-4 py-2"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border rounded px-4 py-2"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all">
        Login College
      </button>
    </form>
  );
};

export default CollegeLoginForm;
