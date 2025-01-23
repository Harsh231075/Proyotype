import React, { useState } from "react";
import CollegeRegisterForm from "./CollegeRegisterForm";
import CollegeLoginForm from "./CollegeLoginForm";
import StudentMentorForm from "./StudentMentorForm";

export const SignupLogin = () => {
  const [activeTab, setActiveTab] = useState("college"); // Default tab
  const [collegeOption, setCollegeOption] = useState("register"); // Default sub-option for college

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Welcome to Our Platform</h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`px-6 py-2 rounded ${activeTab === "college"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setActiveTab("college")}
          >
            College
          </button>
          <button
            className={`px-6 py-2 rounded ${activeTab === "student"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setActiveTab("student")}
          >
            Student
          </button>
          <button
            className={`px-6 py-2 rounded ${activeTab === "mentor"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setActiveTab("mentor")}
          >
            Mentor
          </button>
        </div>

        {/* College Sub-Options */}
        {activeTab === "college" && (
          <div className="mb-6">
            <div className="flex justify-center space-x-4">
              <button
                className={`px-4 py-2 rounded ${collegeOption === "register"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
                  }`}
                onClick={() => setCollegeOption("register")}
              >
                Register
              </button>
              <button
                className={`px-4 py-2 rounded ${collegeOption === "login"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
                  }`}
                onClick={() => setCollegeOption("login")}
              >
                Login
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Forms */}
        {activeTab === "college" && collegeOption === "register" && <CollegeRegisterForm />}
        {activeTab === "college" && collegeOption === "login" && <CollegeLoginForm />}
        {activeTab === "student" && <StudentMentorForm role="Student" />}
        {activeTab === "mentor" && <StudentMentorForm role="Mentor" />}
      </div>
    </div>
  );
};


