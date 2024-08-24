

import { useAuth0 } from "@auth0/auth0-react";
import { MDBContainer, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css'; // Ensure the correct CSS file path

// eslint-disable-next-line react/prop-types
export default function Nav({ searchQuery, setSearchQuery }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { totalQuantity } = useSelector((state) => state.allcart);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='top-3 box-content container '>
      <MDBContainer className='gap-3'>
        <div className='leftside'>
          <MDBNavbarBrand className='bg-green-100 rounded-2xl p-1'>
            <Link to=""><u>s</u>tore<strong><u>@</u></strong>hu<u>b</u></Link>
          </MDBNavbarBrand>
          
          {/* Search bar outside the menu */}
          <div className='btn_search d-flex p-1 h-[50px] rounded-3xl '>
            <span className="input-group-text" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
            <Link to="/card">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Link>
          </div>
          
          {/* Menu icon for smaller screens */}
          <button className='nav-toggle' onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </button>

          {/* Navigation links */}
          <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            <span className='allproduct_btn rounded-3xl px-4 p-1 border-2 border-black'>
              <Link to="/card" className='text-black'>AllProducts</Link>
            </span>
            <button className='text-center bg-zinc-700 text-white rounded-3xl p-1 px-4'>
              <Link to="/cart" className='text-white'>Cart({totalQuantity})</Link>
            </button>
            <button className='text-center ' onClick={() => !isAuthenticated && loginWithRedirect()}>
              <Link to="/wishlist" className="flex justify-center gap-2 border-2 p-1 px-4 rounded-3xl border-gray-700 text-gray-800">
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/like--v1.png" alt="like--v1"  style={{ filter: 'grayscale(100%)', color: 'grey' }} />wishlist
              </Link>
            </button>
            {isAuthenticated ? (
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='bg-zinc-700 text-white px-3 p-1 m-1 rounded-3xl '>
                LogOut
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()} className='bg-zinc-700 text-white px-3 p-1  rounded-3xl'>
                Signup
              </button>
            )}
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
