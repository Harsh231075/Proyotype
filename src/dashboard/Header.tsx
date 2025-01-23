import React from "react";

const Header = () => {
  return (
    <header className="bg-white  text-black shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">College Dashboard</h1>
      <div>
        <button className="px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
