 import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cardSlice';
import { addToWishlist, removeFromWishlist } from '../features/wishlistSlice';
import Masonry from 'react-masonry-css';
import './Card.css'; // Ensure the correct CSS file path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ searchQuery }) => {
  const items = useSelector((state) => state.allcart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isItemInWishlist = (itemId) => {
    return wishlistItems.some(item => item.id === itemId);
  };

  const toggleWishlist = (item) => {
    if (isItemInWishlist(item.id)) {
      dispatch(removeFromWishlist(item));
    } else {
      dispatch(addToWishlist(item));
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
    <div className='p-2 m-3'>
      <MDBContainer>
        <Masonry 
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredItems.map((item) => (
            <MDBCard key={item.id} className='card_custom'>
              <MDBCardImage src={item.image} position='top' alt='...' className='product_img' />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>{item.price}</MDBCardText>
                <div className="button-group flex justify-between">
                  <MDBBtn color='dark' onClick={() => handleAddToCart(item)}>Add to Cart</MDBBtn>
                  <button onClick={() => toggleWishlist(item)}>
                    {isItemInWishlist(item.id) ? <img width="30" height="30" color='red' src="https://img.icons8.com/offices/30/000000/like.png" alt="like"/> : <img width="16" height="16" src="https://img.icons8.com/officexs/16/like.png" alt="like"/>}
                  </button>
                  <ToastContainer />
                </div>
              </MDBCardBody>
            </MDBCard>
          ))}
        </Masonry>
      </MDBContainer>
    </div>
  );
};

export default Card;
