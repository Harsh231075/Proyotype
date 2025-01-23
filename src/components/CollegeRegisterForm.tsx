import React, { useState } from "react";

const CollegeRegisterForm = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    collegeId: "",
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("College Registered:", formData);
    alert("College registration successful!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="collegeName"
        placeholder="College Name"
        className="w-full border rounded px-4 py-2"
        value={formData.collegeName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="collegeId"
        placeholder="College ID"
        className="w-full border rounded px-4 py-2"
        value={formData.collegeId}
        onChange={handleChange}
        required
      />
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
        Register College
      </button>
    </form>
  );
};

export default CollegeRegisterForm;
