import { useSelector, useDispatch } from 'react-redux';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { removeFromWishlist } from '../features/wishlistSlice';
import { addToCart } from '../features/cardSlice';
import Masonry from 'react-masonry-css';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (item) => {
    dispatch(removeFromWishlist(item));
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className='p-2 m-3'>
      <MDBContainer>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <MDBCard key={item.id} className='card_custom'>
                <MDBCardImage src={item.image} position='top' alt='...' className='product_img' />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <div className="button-group flex justify-between">
                    <MDBBtn color='dark' onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                    <button onClick={() => removeFromWishlistHandler(item)}>Remove from Wishlist</button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            ))
          ) : (
            <h1 className='text-center'>No items in wishlist</h1>
          )}
        </Masonry>
      </MDBContainer>
    </div>
  );
};

export default Wishlist;

