// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../../features/cardSlice';
// import { addToWishlist, removeFromWishlist } from '../../features/wishlistSlice'; // Import actions
// import Masonry from 'react-masonry-css';
// import ReactPaginate from 'react-paginate';
// import '../Card'; // Ensure the correct CSS file path
// import { useState } from 'react';

// function Newarrivals() {
//   const items = useSelector((state) => state.allcart.items);
//   const wishlistItems = useSelector((state) => state.wishlist.items); // Get wishlist items
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 8;

//   // Pagination Logic
//   const offset = currentPage * itemsPerPage;
//   const currentItems = items.slice(offset, offset + itemsPerPage);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   const isInWishlist = (itemId) => {
//     return wishlistItems.some(item => item.id === itemId);
//   };

//   const toggleWishlist = (item) => {
//     if (isInWishlist(item.id)) {
//       dispatch(removeFromWishlist(item));
//     } else {
//       dispatch(addToWishlist(item));
//     }
//   };

//   const breakpointColumnsObj = {
//     default: 4,
//     1100: 3,
//     700: 2,
//     500: 1
//   };

//   return (
//     <div className='p-2 m-3 py-5'>
//       <hr />
//       <h1 className='  container items-center justify-center bg-white text-center text-zinc-700 w-[20%] relative bottom-9 rounded-2xl'>
//         <b>New Arrivals</b>
//       </h1>
//       <MDBContainer className='py-5'>
//         <Masonry
//           breakpointCols={breakpointColumnsObj}
//           className="my-masonry-grid"
//           columnClassName="my-masonry-grid_column"
//         >
//           {currentItems.map((item) => (
//             <MDBCard key={item.id} className='card_custom'>
//               <MDBCardImage src={item.image} position='top' alt='...' className='product_img' />
//               <MDBCardBody>
//                 <MDBCardTitle>{item.title}</MDBCardTitle>
//                 <MDBCardText>{item.price}</MDBCardText>
//                 <div className="button-group flex justify-between">
//                   <MDBBtn color='dark' onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
//                   <button onClick={() => toggleWishlist(item)}>
//                     {isInWishlist(item.id) ? <img width="30" height="30" src="https://img.icons8.com/offices/30/000000/like.png" alt="like"/> : <img width="16" height="16" src="https://img.icons8.com/officexs/16/like.png" alt="like"/>}
//                   </button>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           ))}
//         </Masonry>
//       </MDBContainer>
//       <ReactPaginate
//         previousLabel={<button className='bg-zinc-700 px-3 p-1 rounded-3xl text-white'>Previous</button>}
//         nextLabel={<button className='bg-zinc-700 px-3 p-1 rounded-3xl text-white'>Next</button>}
//         breakLabel={'...'}
//         breakClassName={'break-me'}
//         pageCount={pageCount}
//         marginPagesDisplayed={1}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//         className='flex justify-center gap-20 bg-slate-0 p-2 rounded-3xl container'
//       />
//     </div>
//   );
// }

// export default Newarrivals;
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cardSlice';
import { addToWishlist, removeFromWishlist } from '../../features/wishlistSlice'; // Import actions
import Masonry from 'react-masonry-css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../Card'; // Ensure the correct CSS file path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newarrivals() {
  const items = useSelector((state) => state.allcart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items); // Get wishlist items
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  // Pagination Logic
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const isInWishlist = (itemId) => {
    return wishlistItems.some(item => item.id === itemId);
  };

  const toggleWishlist = (item) => {
    if (isAuthenticated) {
      if (isInWishlist(item.id)) {
        dispatch(removeFromWishlist(item));
      } else {
        dispatch(addToWishlist(item));
      }
    } else {
      loginWithRedirect(); // Redirect to login if not authenticated
    }
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log('Item added to cart:', item); // Log item data to console
     toast.success("item added to card")
  };


  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className='p-2 m-3 py-5'>
      <hr />
      <h1 className='container items-center justify-center bg-white text-center text-zinc-700 w-[20%] relative bottom-9 rounded-2xl'>
        <b>New Arrivals</b>
      </h1>
      <MDBContainer className='py-5'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {currentItems.map((item) => (
            <MDBCard key={item.id} className='card_custom'>
              <MDBCardImage src={item.image} position='top' alt='...' className='product_img' />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>{item.price}</MDBCardText>
                <div className="button-group flex justify-between">
                  <MDBBtn color='dark' onClick={() => dispatch( handleAddToCart(item))}>Add to Cart</MDBBtn>
                  <button onClick={() => toggleWishlist(item)}>
                    {isInWishlist(item.id) ? 
                      <img width="30" height="30" src="https://img.icons8.com/offices/30/000000/like.png" alt="like"/> : 
                      <img width="16" height="16" src="https://img.icons8.com/officexs/16/like.png" alt="like"/>
                    }
                  </button>
                  <ToastContainer />
                </div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </Masonry>
      </MDBContainer>
      <ReactPaginate
        previousLabel={<button className='bg-zinc-700 px-3 p-1 rounded-3xl text-white'>Previous</button>}
        nextLabel={<button className='bg-zinc-700 px-3 p-1 rounded-3xl text-white'>Next</button>}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        className='flex justify-center gap-20 bg-slate-0 p-2 rounded-3xl container'
      />
    </div>
  );
}

export default Newarrivals;
