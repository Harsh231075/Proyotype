import React from "react";
import { useNavigate } from "react-router-dom";

export const NotImplementedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6 text-white">
      {/* Placeholder Icon or Image */}
      <div className="mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8142/8142864.png"
          alt="Not Implemented"
          className="w-48 h-48"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-center drop-shadow-lg">
        Feature Coming Soon 🚀
      </h1>

      {/* Description */}
      <p className="text-lg text-center mb-6 max-w-3xl drop-shadow-lg">
        This feature is currently under development and will align with our
        project's flowchart. Stay tuned for its release in the final version.
        Thank you for exploring our prototype!
      </p>

      {/* Navigation Button */}
      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all"
      >
        Back to Prototype
      </button>
    </div>
  );
};


