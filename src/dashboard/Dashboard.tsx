import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import StudentManagement from "./StudentManagement";
import MentorManagement from "./MentorManagement";
import ProjectManagement from "./ProjectManagement";
import ProfileManagement from "./ProfileManagement";

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 bg-gray-100 overflow-y-auto p-6">
        {activeSection === "overview" && <Overview />}
        {activeSection === "students" && <StudentManagement />}
        {activeSection === "mentors" && <MentorManagement />}
        {activeSection === "projects" && <ProjectManagement />}
        {activeSection === "profile" && <ProfileManagement />}
      </div>
    </div>
  );
};


