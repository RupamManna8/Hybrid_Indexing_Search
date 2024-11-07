import React from 'react';
import '../../Styles/footer.css';

function Footer() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-item">
          <p>HAVE A QUESTION?</p>
          <p>EXPLORE OUR HELP CENTER</p>
          <button className="view-more">VIEW MORE</button>
        </div>
        <div className="header-item">
          <p>SHOP</p>
          <p>ALL PRODUCTS</p>
          <p>BEST SELLERS</p>
          <p>SALE</p>
        </div>
        <div className="header-item">
          <p>CONTACT</p>
          <p>info@mysite.com</p>
          <p>500 Terry Francine Street,</p>
          <p>San Francisco, CA 94158</p>
          <p>123-456-7890</p>
        </div>
        <div className="header-item">
          <p>FOLLOW</p>
          <p>INSTAGRAM</p>
          <p>FACEBOOK</p>
          <p>TIKTOK</p>
          <p>YOUTUBE</p>
        </div>
        <div className="header-item">
          <p>LEGAL</p>
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>SHIPPING POLICY</p>
          <p>REFUND POLICY</p>
          <p>ACCESSIBILITY STATEMENT</p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2035 by SIINAX. Built on Wix Studio</p>
      </div>
    </div>
  );
}

export default Footer;
