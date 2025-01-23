import React from "react";

const StudentManagement = () => {
  const students = [
    { id: 1, name: "John Doe", email: "john@example.com", progress: "75%" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", progress: "90%" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Student Management</h2>
      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-black">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b  text-black">
              <td className="p-4">{student.id}</td>
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.email}</td>
              <td className="p-4">{student.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagement;
