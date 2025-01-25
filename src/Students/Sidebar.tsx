import { User, BookOpen, ClipboardList } from "lucide-react";
import { X } from "lucide-react"; // Import close icon

const sections = [
  { name: "Profile", icon: User },
  { name: "Courses", icon: BookOpen },
  { name: "Assignments", icon: ClipboardList },
  { name: "Learning", icon: ClipboardList },
  { name: "jobs", icon: BookOpen },
  { name: "mentor", icon: User }
];

const Sidebar = ({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`} // Sidebar fixed on desktop
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Student Dashboard</h1>
        {/* Close button for mobile */}
        <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
          <X className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <nav className="mt-4 space-y-2">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => {
              setActiveSection(section.name);
              setSidebarOpen(false); // Close sidebar when a section is selected
            }}
            className={`flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 ${activeSection === section.name ? "bg-indigo-100 text-indigo-600" : ""}`}
          >
            <section.icon className="h-5 w-5 mr-3" />
            {section.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
