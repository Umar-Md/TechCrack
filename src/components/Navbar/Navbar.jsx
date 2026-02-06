import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLogo, HireButton } from './NavbarActions';
import { NavbarLinks } from './NavbarLinks';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Logic Function: Handles scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UI Function: Renders the desktop layout
  const DesktopLayout = () => (
    <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
      <NavLogo />
      <NavbarLinks />
      <div className="flex items-center gap-5">
        <div className="hidden sm:block">
          <HireButton />
        </div>
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-7'
    }`}>
      <DesktopLayout />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
};

// Internal Sub-component: Handles mobile overlay logic
const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed inset-0 top-80px bg-black/95 backdrop-blur-3xl z-99 flex flex-col items-center justify-center"
      >
        <NavbarLinks isMobile onLinkClick={onClose} />
        <div className="mt-10"><HireButton /></div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Navbar;