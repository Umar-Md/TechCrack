import React from 'react';
import { Link } from 'react-router-dom';

// Data
const NAV_DATA = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Services", path: "/services" },
  { id: 4, label: "Tech Stack", path: "/techstack" },
  { id: 5, label: "Projects", path: "/projects" },
  { id: 6, label: "Process", path: "/process" },
];

// Individual Link
const NavLinkItem = ({ label, path, onClick, isMobile }) => (
  <Link
    to={path}
    onClick={onClick}
    className={`font-bold transition-all duration-300 hover:text-cyan-400 ${
      isMobile
        ? "text-2xl text-white py-3"
        : "text-[16px] text-gray-400"
    }`}
  >
    {label}
  </Link>
);

// List Component
export const NavbarLinks = ({ isMobile = false, onLinkClick }) => (
  <div
    className={
      isMobile
        ? "flex flex-col items-center gap-4"
        : "hidden lg:flex items-center gap-10"
    }
  >
    {NAV_DATA.map((link) => (
      <NavLinkItem
        key={link.id}
        {...link}
        onClick={onLinkClick}
        isMobile={isMobile}
      />
    ))}
  </div>
);