import React, { useEffect, useState } from "react";
import "../../Styles/content.css";
import products from "../../Data/data";
export default function Content() {
  const [homeProducts, sethomeProducts] = useState([]);
  useEffect(() => {
    let newPro = products.filter((data) => data.home === "yes");
    sethomeProducts(newPro);
    console.log(newPro);
  }, []);
  return (
    <div className="main-containt" >
      <div className="section1">
        <div className="background-text">
          Quality applications and gadgets Smart solutions for everyday
          convenience
          <div className="shopnow-btn">[Shop Now]</div>
        </div>
      </div>
      <h2 style={{ margin: "30px 0px 0px 30px" }}>Trending Now</h2>
      <div className="section2">
        {homeProducts.map((product) => (
          <div key={product.id} className="section2-box">
            <img src={product.image} alt="product" className="images" />
            <div className="product-details">
              <h3 style={{fontSize:"20px"}}>{product.name}</h3>
              <p style={{fontSize:"18px"}}>Price: {product.price} ₹</p>
            </div>
          </div>
        ))}
      </div>
      <div className="section3">
         <div className="section3-text">
         10% off all smart watches with every purchase
           Explore limited time offers
           <div className="shopnow-btn">[Shop Now]</div>
         </div>
      </div>
      <div className="section4">
          <div className="section4-container">
             <div className="section4-box">Speaker & Headphones</div>
             <div className="section4-box">Watches</div>
             <div className="section4-box">Smart Phone</div>
             <div className="section4-box">sale</div>
          </div>
      </div>
    </div>
  );
}
