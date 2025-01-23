import React, { useState } from "react";

const ProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Profile Data
  const [profileData, setProfileData] = useState({
    logo: "",
    collegeName: "Tech University",
    description:
      "A leading institution fostering innovation and industry collaboration.",
    completedProjects: [
      "AI Chatbot for Healthcare",
      "E-Commerce Platform for SMEs",
      "Data Analysis Tool for Finance",
    ],
    topStudents: [
      { name: "John Doe", achievements: "5 Projects Completed" },
      { name: "Jane Smith", achievements: "4 Projects Completed" },
    ],
  });

  // Editable State
  const [editableData, setEditableData] = useState(profileData);

  // Handle Logo Upload
  const handleLogoUpload = (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    if (file) {
      setEditableData({ ...editableData, logo: URL.createObjectURL(file) });
    }
  };

  // Save Changes
  const handleSave = () => {
    setProfileData(editableData);
    setIsEditing(false);
  };

  // Cancel Changes
  const handleCancel = () => {
    setEditableData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-black">College Profile</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* College Logo */}
      <div className="flex items-center space-x-4">
        <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden">
          {editableData.logo ? (
            <img
              src={editableData.logo}
              alt="College Logo"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-gray-500 flex items-center justify-center h-full">
              No Logo
            </span>
          )}
        </div>
        {isEditing && (
          <div>
            <label
              htmlFor="logo-upload"
              className="cursor-pointer bg-gray-100 px-4 py-2 rounded shadow hover:bg-gray-200"
            >
              Upload Logo
            </label>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleLogoUpload}
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-black">{editableData.collegeName}</h3>
          {!isEditing ? (
            <p className="text-gray-700">{editableData.description}</p>
          ) : (
            <textarea
              value={editableData.description}
              onChange={(e) =>
                setEditableData({ ...editableData, description: e.target.value })
              }
              className="w-full border rounded p-2"
            />
          )}
        </div>
      </div>

      {/* Completed Projects */}
      <div>
        <h3 className="text-xl font-semibold text-black">Completed Projects</h3>
        {!isEditing ? (
          <ul className="list-disc ml-6 text-gray-700">
            {profileData.completedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        ) : (
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {editableData.completedProjects.map((project, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={project}
                  onChange={(e) => {
                    const updatedProjects = [...editableData.completedProjects];
                    updatedProjects[index] = e.target.value;
                    setEditableData({ ...editableData, completedProjects: updatedProjects });
                  }}
                  className="border rounded p-2 w-full"
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Top Students */}
      <div>
        <h3 className="text-xl font-semibold text-black">Top Students</h3>
        {!isEditing ? (
          <ul className="list-disc ml-6 text-gray-700">
            {profileData.topStudents.map((student, index) => (
              <li key={index}>
                <span className="font-bold">{student.name}:</span>{" "}
                {student.achievements}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-2">
            {editableData.topStudents.map((student, index) => (
              <li key={index} className="flex space-x-4">
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => {
                    const updatedStudents = [...editableData.topStudents];
                    updatedStudents[index].name = e.target.value;
                    setEditableData({ ...editableData, topStudents: updatedStudents });
                  }}
                  className="border rounded p-2 flex-1"
                  placeholder="Student Name"
                />
                <input
                  type="text"
                  value={student.achievements}
                  onChange={(e) => {
                    const updatedStudents = [...editableData.topStudents];
                    updatedStudents[index].achievements = e.target.value;
                    setEditableData({ ...editableData, topStudents: updatedStudents });
                  }}
                  className="border rounded p-2 flex-1"
                  placeholder="Achievements"
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Save/Cancel Buttons */}
      {isEditing && (
        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileManagement;
