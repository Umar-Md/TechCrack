import React from 'react';
import { Link } from 'react-router-dom';

// 1. Data Structure: Isolated for easy updates
const NAV_DATA = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Services", path: "/services" },
  { id: 4, label: "Tech Stack", path: "/#tech" },
  { id: 5, label: "Projects", path: "/marketplace" },
  { id: 6, label: "Process", path: "/#process" },
];

// 2. Smallest Unit: Individual Link
const NavLinkItem = ({ label, path, onClick, isMobile }) => (
  <Link
    to={path}
    onClick={onClick}
    className={`font-bold transition-all duration-300 hover:text-cyan-400 
      ${isMobile ? "text-2xl py-4" : "text-[16px] text-gray-400"}`}
  >
    {label}
  </Link>
);

// 3. Middle Unit: The List Component
export const NavbarLinks = ({ isMobile = false, onLinkClick }) => (
  <div className={isMobile ? "flex flex-col items-center" : "hidden lg:flex items-center gap-10"}>
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