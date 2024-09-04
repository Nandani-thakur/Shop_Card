import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cardSlice';
import { addToWishlist, removeFromWishlist } from '../../features/wishlistSlice';
import Masonry from 'react-masonry-css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../Card'; // Ensure the correct CSS file path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newarrivals() {
  const items = useSelector((state) => state.allcart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

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
      loginWithRedirect();
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log('Item added to cart:', item);
    toast.success("Item added to cart");
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
                <div className="button-group flex justify-between items-center">
                  <MDBBtn color='dark' onClick={() => handleAddToCart(item)}>Add to Cart</MDBBtn>
                  <button onClick={() => toggleWishlist(item)}>
                    {isInWishlist(item.id) ? 
                      <img width="30" height="30" src="https://img.icons8.com/offices/30/000000/like.png" alt="like"/> : 
                      <img width="16" height="16" src="https://img.icons8.com/officexs/16/like.png" alt="like"/>
                    }
                  </button>
                </div>
                <ToastContainer />
              </MDBCardBody>
            </MDBCard>
          ))}
        </Masonry>
      </MDBContainer>
      <ReactPaginate
        previousLabel={<button className='bg-zinc-700 px-3 py-1 rounded-full text-white'>Previous</button>}
        nextLabel={<button className='bg-zinc-700 px-3 py-1 rounded-full text-white'>Next</button>}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination flex flex-wrap justify-center gap-2'}
        activeClassName={'active'}
        className='flex flex-wrap justify-center gap-2 bg-slate-100 p-2 rounded-3xl'
      />
    </div>
  );
}

export default Newarrivals;
