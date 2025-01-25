import { useState } from "react";
import Sidebar from "./Sidebar"; // Import Sidebar component
import { Menu } from "lucide-react"; // Import hamburger and close icons
import { Learning } from "./Learning";
import { Jobs } from "./Jobs";
import { Mentorship } from "./Mentorship";

function Header() {
  const [activeSection, setActiveSection] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "Profile":
        return (
          <div>
            <h2 className="text-xl text-black font-bold mb-4">Student Profile</h2>
            <p className="  text-black">Welcome to your profile! Here you can view and edit your details.</p>
          </div>
        );
      case "Courses":
        return (
          <div>
            <h2 className="text-xl  text-black font-bold mb-4">My Courses</h2>
            <p className="  text-black">Here are all your enrolled courses. Keep learning!</p>
          </div>
        );
      case "Assignments":
        return (
          <div>
            <h2 className="text-xl text-black font-bold mb-4">Assignments</h2>
            <p className="  text-black">Check out your pending and completed assignments.</p>
          </div>
        );
      case "Learning":
        return (
          <Learning />
        );
      case "mentor":
        return (
          <Mentorship />
        );
      case "jobs":
        return (
          <Jobs />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content Area */}
      <div className="">
        {/* Header for mobile */}
        <header className="lg:hidden bg-white shadow">
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-lg font-bold text-indigo-600">Dashboard</h1>
            {/* Hamburger Menu Icon */}
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default Header;
