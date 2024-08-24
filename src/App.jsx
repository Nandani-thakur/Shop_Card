 

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Nav from './components/Nav';
import Card from './components/Card';

import HomePage from './components/Homepage/HomePage.jsx';
import Wishlist from './components/Wishlist.jsx';
import { useState, useEffect } from 'react';
import Cancel from './components/Cancel.jsx';
import Successfull from './components/Successfull.jsx';
import PageCart from './components/PageCart.jsx';

function App() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (isAuthenticated && user) {
      const userEmail = user.email;
      const storedCart = localStorage.getItem(`cart_${userEmail}`);
      const storedWishlist = localStorage.getItem(`wishlist_${userEmail}`);
      
      setCart(JSON.parse(storedCart) || []);
      setWishlist(JSON.parse(storedWishlist) || []);
    }
  }, [isAuthenticated, user]);

  const handleAddToCart = (item) => {
    if (isAuthenticated && user) {
      const userEmail = user.email;
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(updatedCart));
    }
  };

  const handleAddToWishlist = (item) => {
    if (isAuthenticated && user) {
      const userEmail = user.email;
      const updatedWishlist = [...wishlist, item];
      setWishlist(updatedWishlist);
      localStorage.setItem(`wishlist_${userEmail}`, JSON.stringify(updatedWishlist));
    }
  };

  return (
    <BrowserRouter>
      <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path='/card' element={<Card searchQuery={searchQuery} onAddToCart={handleAddToCart} />} />
        <Route path='/cart' element={<PageCart cart={cart} />} />
        <Route path='/' element={<HomePage />} />
        
        <Route path='/success' element={<Successfull />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route
          path="/wishlist"
          element={isAuthenticated ? <Wishlist wishlist={wishlist} onAddToWishlist={handleAddToWishlist} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/wishlist"
          element={!isAuthenticated && (
            <div>
              <p>You need to be logged in to access the wishlist.</p>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </div>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
