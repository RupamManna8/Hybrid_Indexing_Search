import React from 'react';
import '../../Styles/cart.css';

export default function AddToCart({ cart, setCart,updateUser }) {

  const removeFromCart = async (_id) => {
    try {
      const response = await fetch(`http://localhost:9000/users/cart/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Item removed from cart");
        await updateUser();
        // Update the cart state locally by filtering out the removed item
        setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
      } else {
        console.error("Failed to remove item from cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.Price * item.quantity, 0).toFixed(2);
  };

  const buyNow = (product) => {
    alert(`Buying ${product.Product} for ₹${(product.Price * product.quantity).toFixed(2)}`);
  };

  const buyAll = () => {
    alert(`Buying all items in the cart for ₹${calculateTotal()}`);
  };

  const updateQuantity = (_id, quantity) => {
    const newQuantity = Math.max(1, parseInt(quantity) || 1); // Ensure the quantity is at least 1
    setCart(cart.map(item =>
      item._id === _id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <React.Fragment>
      <div className="cart-container">
        <h2>Cart</h2>
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.Image} alt={item.Product} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.Product}</h4>
                  <p>Price: ₹{item.Price}</p>
                  <div className="quantity-container">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item._id, e.target.value)}
                      className="quantity-input"
                    />
                  </div>
                  <p>Total: ₹{(item.Price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => buyNow(item)} className="buy-now-cart-btn">
                  Buy Now
                </button>
                <button onClick={() => removeFromCart(item._id)} className="remove-btn">
                  Remove
                </button>
              </div>
            ))}
            <div className="total-price">
              <h3 style={{color:"white"}}>Total Price: ₹{calculateTotal()}</h3>
              <button onClick={buyAll} className="buy-all-btn">
                Buy All
              </button>
            </div>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
    </React.Fragment>
  );
}
