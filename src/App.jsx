import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Marketplace from './pages/Marketplace';
import Services from './components/Services/Services';
import TechStack from './components/TechStack/TechStack';

const AppRoutes = () => (
  <Routes>
    {/* Home now shows Hero + About + Services */}
    <Route path="/" element={<Home />} />
    
    {/* These routes allow direct access to single pages */}
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/marketplace" element={<Marketplace />} />
    <Route path="/techstack" element={<TechStack />} />
  </Routes>
);

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-black text-white selection:bg-cyan-500">
    <Navbar />
    <main>{children}</main>
  </div>
);

function App() {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}

export default App;