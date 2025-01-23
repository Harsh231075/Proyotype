
const MentorManagement = () => {
  const mentors = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", students: 15 },
    { id: 2, name: "Bob Williams", email: "bob@example.com", students: 10 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mentor Management</h2>
      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-black">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Assigned Students</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor) => (
            <tr key={mentor.id} className="border-b text-black">
              <td className="p-4">{mentor.id}</td>
              <td className="p-4">{mentor.name}</td>
              <td className="p-4">{mentor.email}</td>
              <td className="p-4">{mentor.students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MentorManagement;
