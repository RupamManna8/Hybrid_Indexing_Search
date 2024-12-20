import React from "react";


const ProductGrid = ({ results, buyProduct, addToCart, user ,setCheckout,setCheckoutProduct}) => {
  

  // Helper function to check if a product is in the cart
  const isProductInCart = (product) => {
    return user && user._id && user.Cart.some((cartItem) => cartItem.Product === product.name);
  };

  // New function to handle adding to cart with duplication check
  const handleAddToCart = (product) => {
    if (isProductInCart(product)) {
      alert("This item is already in your cart.");
    } else {
      addToCart(product);
    }
  };

  const productDetails = (product) => {
    setCheckoutProduct(product);
    setCheckout(true);
  };

  return (
    <React.Fragment>
      <div className="results-grid">
        {results.length > 0 ? (
          results.map((product) => (
            <div key={product.id} className="result-item" onClick={() => productDetails(product)}>
              <img src={product.image} alt="product" className="images" />
              <h3>{product.name}</h3>
              <p>Price: {product.price} ₹</p>
              <div className="cartAndBuy" style={{ display: "flex", gap: "10px" }}>
                <button className="buyButton" onClick={(e) => { e.stopPropagation(); productDetails(product); }}>Checkout</button>
                <button className="cartButton" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                  {isProductInCart(product) ? "In Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No products found</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductGrid;
