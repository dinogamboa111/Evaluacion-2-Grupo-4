import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';

// Import context
import { CartProvider } from './context/CartContext'; //

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import CartPage from './pages/Cart/CartPage'; // 

function App() {
  return (
    <CartProvider> 
      <Router>
        <div className="App">
          <StarsBackground />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<CartPage />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;