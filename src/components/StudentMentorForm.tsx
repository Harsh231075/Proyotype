import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentMentorForm = ({ role }) => {
  const [formData, setFormData] = useState({
    collegeName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(`${role} Login:`, formData);
    alert(`${role} login successful!`);
    navigate("/not-implemented");
  };

  const colleges = ["College A", "College B", "College C"]; // Mock college names

  return (
    <form onSubmit={handleSubmit} className="space-y-4  text-black">
      <select
        name="collegeName"
        className="w-full border rounded px-4 py-2"
        value={formData.collegeName}
        onChange={handleChange}
        required
      >
        <option value="">Select College</option>
        {colleges.map((college, index) => (
          <option key={index} value={college}>
            {college}
          </option>
        ))}
      </select>
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
        Login as {role}
      </button>
    </form>
  );
};

export default StudentMentorForm;
