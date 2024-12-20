import React, { useState } from "react";

const BuyingPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("Default Variant");
 
  

  return (
    <div>
      <h1>Order Summary</h1>
      <p>
        <strong>Variant:</strong> {selectedVariant}
      </p>
      <p>
        <strong>Quantity:</strong> {quantity}
      </p>
      <p>
        <strong>Total Price:</strong> ${(quantity * 50).toFixed(2)} (Assuming
        $50 per item)
      </p>

      <div style={{ marginTop: "20px" }}>
        <h2>Shipping Information</h2>
        <p>Please enter your shipping details below:</p>
        <form style={{ display: "grid", gap: "10px" }}>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="text"
            placeholder="Address"
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="text"
            placeholder="City"
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="text"
            placeholder="Postal Code"
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#28A745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyingPage;
