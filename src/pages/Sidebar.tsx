// Sidebar.tsx
import React from "react";
import { NavLink } from "../components/NavLink";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { NavGroup } from "../components/NavGroup";

const Sidebar: React.FC = () => {
  const links = [
    { label: "Data Aset", to: "/", icon: faFileAlt },
    { label: "Tambah Aset", to: "/tambah-aset", icon: faCircle },
    { label: "Tambah Vendor", to: "/tambah-vendor", icon: faCircle },
  ];

  return (
    <div className="sidebar bg-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out flex flex-col justify-between">
      {/* Bagian Atas: Logo & Navigasi */}
      <div>
        <div className="text-white flex items-center space-x-2 px-4 mb-5">
          {/* Your SVG Logo */}
          <span className="text-sm font-bold underline">
            BATUNGGAL INDAH CLUB
          </span>
        </div>
        <nav>
          {/* Navigation Links */}
          <NavLink to="" label="Dashboard" icon={faTachometerAlt} />
          <NavGroup
            mainLabel="Kelola Aset"
            mainIcon={faToolbox}
            links={links}
          />
          {/* Repeat for other links */}
        </nav>
      </div>

      {/* Bagian Bawah: Profil */}
      <div className="px-4 py-6">
        <div className="flex items-center border-t border-gray-700 pt-6">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://placehold.jp/150x150.png"
              alt="Profile picture"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-white">Admin</div>
            <div className="text-sm font-medium text-gray-400">
              BIC@gmail.com
            </div>
          </div>
          <a href="#" className="ml-auto">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
