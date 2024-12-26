import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import Blog from './pages/Blog';
import Partner from './pages/Partner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;