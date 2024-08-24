// import {  MDBNavbarBrand } from "mdb-react-ui-kit"
// import { Link } from "react-router-dom"


// function Footer() {
//   return (
//     <div className="p-5 ">
//         <hr/>
//         <MDBNavbarBrand className='bg-green-100 rounded-2xl p-1 w-[7%] ' ><Link to="/main" ><u>s</u>tore<strong><u>@</u></strong>hu<u>b</u></Link></MDBNavbarBrand>
//         <div className="text-center container justify-around flex">

        
// <ul>
//     <li><h5>Getting Started</h5></li>
//     <li><Link to='/'>Home</Link></li>
//     <li><Link to='/card'>All Product</Link></li>
//     <li>Collection</li>
// <li><Link to='/cart'>Cart</Link></li>
// <li><Link to='/wishlist'>wishlisht</Link></li>

// </ul>
// <ul>
// <li><h5>user</h5></li>
// <li>login</li>
// <li>signup</li>



// </ul>
// <ul >
// <li><h5>Contact Us</h5></li>
// <li>Phone: 123456789</li>
// <li>email: store@hub.com</li>
// <li>Address: 123456789</li>

// </ul> 
// <ul>
//     <li><h5>Follow Us</h5></li>
//     <li>Facebook</li>
//     <li>Instagram</li>
//     <li>Twitter</li>
//     <li>Youtube</li>
    
// </ul>
//    </div>
//         </div>

    

//   )
// }

// export default Footer
import { MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="p-5 bg-gray-100">
      <hr className="mb-4"/>
      <div className="inline-block bg-green-100 rounded-2xl p-1">
        <MDBNavbarBrand className="inline-block">
          <Link to="/main" className="text-lg font-semibold">
            <u>s</u>tore<strong><u>@</u></strong>hu<u>b</u>
          </Link>
        </MDBNavbarBrand>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row justify-around text-center sm:text-left mt-5 space-y-5 sm:space-y-0">

        <ul className="space-y-2">
          <li><h5 className="font-bold">Getting Started</h5></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/card'>All Products</Link></li>
          <li>Collection</li>
          <li><Link to='/cart'>Cart</Link></li>
          <li><Link to='/wishlist'>Wishlist</Link></li>
        </ul>

        <ul className="space-y-2">
          <li><h5 className="font-bold">User</h5></li>
          <li><Link >Login</Link></li>
          <li><Link >Signup</Link></li>
        </ul>

        <ul className="space-y-2">
          <li><h5 className="font-bold">Contact Us</h5></li>
          <li>Phone: 123456789</li>
          <li>Email: store@hub.com</li>
          <li>Address: 123 Main St</li>
        </ul>

        <ul className="space-y-2">
          <li><h5 className="font-bold">Follow Us</h5></li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>

      </div>
    </div>
  )
}

export default Footer;
