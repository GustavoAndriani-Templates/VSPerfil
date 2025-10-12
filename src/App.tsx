import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Machines from './pages/Machines';
import MachineDetails from './components/machines/MachineDetails';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { machinesData } from './data/machines';
import './styles/globals.css';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route 
              path="/" 
              element={<Home featuredMachines={machinesData} />} 
            />
            <Route 
              path="/machines" 
              element={<Machines machines={machinesData} />} 
            />
            <Route 
              path="/machines/:id" 
              element={<MachineDetails machines={machinesData} />} 
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;