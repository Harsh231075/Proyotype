import React from "react";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 bg-blue-600 text-white h-screen fixed">
      <div className="p-6 text-2xl font-bold">College Dashboard</div>
      <nav className="flex flex-col space-y-2 mt-4">
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("overview")}
        >
          Overview
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("students")}
        >
          Student Management
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("mentors")}
        >
          Mentor Management
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("projects")}
        >
          Project Management
        </button>
        <button
          className="w-full text-left px-6 py-3 hover:bg-blue-500"
          onClick={() => setActiveSection("profile")}
        >
          Profile Management
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
