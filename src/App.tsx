import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { productsData } from './data/products';
import ProductDetails from './components/products/ProductDetails';
// import './styles/globals.css';

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
              element={<Home featuredProducts={productsData} />}
            />
            <Route
              path="/products"
              element={<Products products={productsData} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetails products={productsData} />}
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
