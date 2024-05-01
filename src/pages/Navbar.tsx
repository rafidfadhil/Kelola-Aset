// Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold ml-4">Kelola Aset</h1>
      </div>
      <div className="flex items-center">
        {/* Profile dropdown */}
      </div>
    </header>
  );
};

export default Navbar;
