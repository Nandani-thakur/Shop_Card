

import { MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="p-5 bg-gray-100">
      <hr className="mb-4"/>
      <div className="flex justify-center mb-5">
        <div className="bg-green-100 rounded-2xl p-1 inline-block">
          <MDBNavbarBrand>
            <Link to="/main" className="text-lg font-semibold">
              <u>s</u>tore<strong><u>@</u></strong>hu<u>b</u>
            </Link>
          </MDBNavbarBrand>
        </div>
      </div>
      <div className="container mx-auto mt-5 flex flex-col sm:flex-row justify-between text-center sm:text-left space-y-5 sm:space-y-0">
        <ul className="space-y-2">
          <li><h5 className="font-bold text-lg">Getting Started</h5></li>
          <li><Link to='/' className="hover:underline">Home</Link></li>
          <li><Link to='/card' className="hover:underline">All Products</Link></li>
          <li><Link to='/collection' className="hover:underline">Collection</Link></li>
          <li><Link to='/cart' className="hover:underline">Cart</Link></li>
          <li><Link to='/wishlist' className="hover:underline">Wishlist</Link></li>
        </ul>

        <ul className="space-y-2">
          <li><h5 className="font-bold text-lg">User</h5></li>
          <li><Link to='/login' className="hover:underline">Login</Link></li>
          <li><Link to='/signup' className="hover:underline">Signup</Link></li>
        </ul>

        <ul className="space-y-2">
          <li><h5 className="font-bold text-lg">Contact Us</h5></li>
          <li>Phone: 123456789</li>
          <li>Email: store@hub.com</li>
          <li>Address: 123 Main St</li>
        </ul>

        <ul className="space-y-2">
          <li><h5 className="font-bold text-lg">Follow Us</h5></li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
