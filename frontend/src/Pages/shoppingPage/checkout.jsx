import React, { useState, useEffect } from "react"; 

import "../../Styles/buy.css";
const Checkout = ({ checkoutProduct, handleBackToSearch }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      setTotalPrice(checkoutProduct.price * quantity);
    }, [checkoutProduct, quantity]);
  
    const handleQuantityChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setQuantity(value > 0 ? value : 1); // Minimum quantity is 1
    };
  
    const handleBuyNow = () => {
      alert(`You have bought ${quantity} of ${checkoutProduct.name} for ₹${totalPrice}`);
      // Here you can add your buy logic, like API calls to process the purchase
    };
  
    return (
      <React.Fragment>
        <div className="buying-page">
          <button onClick={handleBackToSearch} className="back-button">
            Back
          </button>
          <div className="product-details">
            <img src={checkoutProduct.image} alt={checkoutProduct.name} className="product-image" />
            <div className="product-info">
              <h2>{checkoutProduct.name}</h2>
              <p className="product-description">{checkoutProduct.description}</p>
              <p className="product-price">₹{checkoutProduct.price}</p>
              <p className="offer">Special Offer: Get 10% off on first purchase!</p>
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
              </div>
              <p className="total-price">Total Price: ₹{totalPrice}</p>
              <button className="buy-now-button" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  

export default Checkout;
