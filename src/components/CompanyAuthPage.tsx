import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyAuthPage = () => {
  const [activeTab, setActiveTab] = useState("register"); // Default tab is "Register"
  const [registerData, setRegisterData] = useState({
    companyName: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // Handle input changes for registration form
  const handleRegisterChange = (e: { target: { name: any; value: any; }; }) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Handle input changes for login form
  const handleLoginChange = (e: { target: { name: any; value: any; }; }) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle registration form submission
  const handleRegisterSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Company Registered:", registerData);
    alert("Company registered successfully!");
  };

  // Handle login form submission
  const handleLoginSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Company Login:", loginData);
    alert("Login successful!");
    navigate("/not-implemented");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`w-1/2 py-2 font-semibold text-center ${activeTab === "register"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
          <button
            className={`w-1/2 py-2 font-semibold text-center ${activeTab === "login"
              ? "text-blue-600 border-b-4 border-blue-600"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
        </div>

        {/* Register Form */}
        {activeTab === "register" && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                className="w-full border rounded px-4 py-2"
                value={registerData.companyName}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter your location"
                className="w-full border rounded px-4 py-2"
                value={registerData.location}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded px-4 py-2"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded px-4 py-2"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full border rounded px-4 py-2"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
            >
              Register
            </button>
          </form>
        )}

        {/* Login Form */}
        {activeTab === "login" && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded px-4 py-2"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded px-4 py-2"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CompanyAuthPage;
