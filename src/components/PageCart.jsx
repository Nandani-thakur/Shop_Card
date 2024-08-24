 import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementItemQuantity, decrementItemQuantity } from '../features/cardSlice';
import { loadStripe } from '@stripe/stripe-js';

function PageCart() {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Cart state:', cart); // Log cart state for debugging
  }, [cart]);

  const handleDecrement = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const Makepayment = async () => {
    try {
      const stripe = await loadStripe('pk_test_51PfiOkRtWelXHIBrHpdwrvyczyozSEsIUvfQ4ewvs32eiIQbw21gvyXJ6FNNBcC6MSimo7tH5xhZU3bjvnwApA4A00J9ZmRQgh');
      const body = { ProductData: cart };
      const header = { "Content-Type": "application/json" };

      const response = await fetch("http://localhost:7000/api/create-checkout-session", {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during the payment process. Please try again.');
    }
  };

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {cart.map((item) => (
                    <div className="row" key={item.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded">
                          <img src={item.image} alt='Product Image' className='product_img' />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{item.title}</strong></p>
                        <button
                          type="button"
                          className="btn btn-black btn-sm me-1 mb-2"
                          onClick={() => handleRemoveItem(item.id)}
                          title="Remove item"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button
                            type="button"
                            className="btn btn-black px-3 me-2"
                            onClick={() => handleDecrement(item.id)}
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <div className="form-outline">
                            <input
                              id={`quantity-${item.id}`}
                              min={0}
                              name="quantity"
                              value={item.quantity}
                              type="number"
                              className="form-control"
                              readOnly
                            />
                            <label className="form-label" htmlFor={`quantity-${item.id}`}></label>
                          </div>
                          <button
                            type="button"
                            className="btn btn-black px-3 ms-2"
                            onClick={() => handleIncrement(item.id)}
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>${item.quantity * item.price}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                  <hr className="my-4" />
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Expected shipping delivery</strong></p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card w-[20rem]">
                <div className="card-header">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Total Amount
                      <span>${totalPrice.toFixed(2)}</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-black btn-lg btn-block"
                    onClick={Makepayment}
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageCart;
