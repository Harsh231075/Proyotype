import React, { useState } from "react";

const ProjectManagement = () => {
  // State to hold project data
  const [projects, setProjects] = useState([
    { id: 1, title: "AI Chatbot", company: "TechCorp", status: "Ongoing" },
    { id: 2, title: "E-Commerce Platform", company: "ShopEase", status: "Completed" },
  ]);

  // State for new project form
  const [newProject, setNewProject] = useState({
    title: "",
    company: "",
    status: "Ongoing",
  });

  // State for editing projects
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Handle form input changes
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  // Handle adding a new project
  const handleAddProject = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (newProject.title && newProject.company) {
      const newId = projects.length ? projects[projects.length - 1].id + 1 : 1;
      setProjects([...projects, { ...newProject, id: newId }]);
      setNewProject({ title: "", company: "", status: "Ongoing" });
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Handle editing a project
  const handleEditProject = (project: { id: any; title: any; company: any; status: any; }) => {
    setIsEditing(true);
    setEditId(project.id);
    setNewProject({ title: project.title, company: project.company, status: project.status });
  };

  const handleUpdateProject = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const updatedProjects = projects.map((project) =>
      project.id === editId ? { ...project, ...newProject } : project
    );
    setProjects(updatedProjects);
    setIsEditing(false);
    setNewProject({ title: "", company: "", status: "Ongoing" });
  };

  // Handle deleting a project
  const handleDeleteProject = (id: number) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Project Management</h2>

      {/* Project List */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Ongoing Projects</h3>
        <table className="w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-black">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b  text-black">
                <td className="p-4">{project.id}</td>
                <td className="p-4">{project.title}</td>
                <td className="p-4">{project.company}</td>
                <td className="p-4">{project.status}</td>
                <td className="p-4 space-x-2">
                  <button
                    className="px-3 py-1 bg-green-600 text-black rounded hover:bg-green-700"
                    onClick={() => handleEditProject(project)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => handleDeleteProject(project.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Project Form */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          {isEditing ? "Edit Project" : "Add New Project"}
        </h3>
        <form
          onSubmit={isEditing ? handleUpdateProject : handleAddProject}
          className="space-y-4 bg-gray-100 p-4 rounded shadow"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            className="w-full border rounded px-4 py-2"
            value={newProject.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full border rounded px-4 py-2"
            value={newProject.company}
            onChange={handleInputChange}
            required
          />
          <select
            name="status"
            className="w-full border rounded px-4 py-2"
            value={newProject.status}
            onChange={handleInputChange}
          >
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
          >
            {isEditing ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectManagement;
