import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Overview = () => {
  // Data for the graph
  const graphData = [
    { name: "Students", count: 150 },
    { name: "Mentors", count: 25 },
    { name: "Companies", count: 10 },
    { name: "Collaborations", count: 8 },
  ];

  // Active Projects
  const projects = [
    { title: "AI Chatbot", students: 5, deadline: "20 Jan 2025", status: "Ongoing" },
    { title: "E-Commerce Website", students: 8, deadline: "15 Feb 2025", status: "Ongoing" },
    { title: "Data Analysis Tool", students: 3, deadline: "5 Mar 2025", status: "Completed" },
  ];

  // Top Performers
  const topPerformers = [
    { name: "John Doe", projectsCompleted: 5, score: "95%" },
    { name: "Jane Smith", projectsCompleted: 4, score: "92%" },
    { name: "Mike Johnson", projectsCompleted: 3, score: "89%" },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Section 1: Key Metrics (Graph + Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metrics Graph */}
        <div className="col-span-2 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-black">Key Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4A90E2" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Metrics Cards */}
        <div className="space-y-4">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h4 className="text-xl font-bold text-black">150</h4>
            <p className="text-black">Total Students</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h4 className="text-xl font-bold text-black">25</h4>
            <p className="text-black">Total Mentors</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h4 className="text-xl font-bold text-black">10</h4>
            <p className="text-black">Active Companies</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h4 className="text-xl font-bold text-black">8</h4>
            <p className="text-black">Collaborations</p>
          </div>
        </div>
      </div>

      {/* Section 2: Active Projects */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-black">Active Projects</h3>
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left text-black">Project Title</th>
              <th className="p-2 text-left text-black">Assigned Students</th>
              <th className="p-2 text-left text-black">Deadline</th>
              <th className="p-2 text-left text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 text-black">{project.title}</td>
                <td className="p-2 text-black">{project.students}</td>
                <td className="p-2 text-black">{project.deadline}</td>
                <td className="p-2 text-black">{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3: Top Performers */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-black">Top Performers</h3>
        <ul className="space-y-2">
          {topPerformers.map((student, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border rounded text-black"
            >
              <span>{student.name}</span>
              <span>{student.projectsCompleted} Projects</span>
              <span>{student.score}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 4: Notifications */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4 text-black">Notifications</h3>
        <ul className="list-disc ml-6 space-y-2 text-black">
          <li>Project "AI Chatbot" deadline is approaching (20 Jan 2025).</li>
          <li>New job opportunity from "TechCorp" posted.</li>
          <li>Mentor meeting scheduled for 22 Jan 2025.</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
