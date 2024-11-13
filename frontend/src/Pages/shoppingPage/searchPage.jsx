import React, { useState, useEffect,useCallback ,useRef} from "react";
import Nav from "../Nav.jsx";
import hybridIndex from "./hybridIndex.js";
import Filter from "./Filter.jsx";
import Dropdown from "./dropDown.jsx";
import ProductGrid from "./productGrid.jsx";
import "../../Styles/searchPage.css";
import products from "../../Data/data.js";
import Checkout from "./checkout.jsx";
import { useLocation } from "react-router-dom";

// Initialize the hybridIndex with products
products.forEach((product) => hybridIndex.addProduct(product));

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dropdown, setDropdown] = useState([]);
  const [dropdownStyle, setDropdownStyle] = useState("2px solid #e5e7eb");
  const [priceFilter, setPriceFilter] = useState(10000);
  const [cart, setCart] = useState([]);
  const [accountuser, setAccountUser] = useState([]);
  const [checkout,setCheckout] = useState(false);
  const [checkoutProduct,setCheckoutProduct] = useState([]);
  const [loginAction, setLoginAction] = useState(false);
  const location = useLocation();
  const userID = new URLSearchParams(location.search).get("userID");
  // Track if it's the first render
  const isFirstRender = useRef(true);

  // Fetch updated user data
  const updateUser = useCallback(async () => {
    if (!accountuser?._id) return;

    try {
      const response = await fetch(`http://localhost:9000/users/${accountuser._id}`);
      if (response.ok) {
        const updatedUser = await response.json();
        setAccountUser(updatedUser);
        setCart(updatedUser.Cart || []);
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [accountuser?._id]);

  // Add to cart and fetch the updated user data
  const addToCart = async (product) => {
    try {
      if (accountuser && accountuser._id) {
        const response = await fetch(`http://localhost:9000/users/${accountuser._id}/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Product: product.name,
            Image: product.image,
            Price: product.price,
          }),
        });

        if (response.ok) {
          alert("Item added");
          await updateUser(); // Fetch updated user data after adding item to cart
        } else {
          console.error("Failed to add item to cart:", response.statusText);
        }
      } else {
        alert("Please log in to add items to the cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };


  // Search-related functions
  const handleClear = () => {
    setQuery("");
    const defaultProducts = products.filter((data) => data.default === "yes");
    setResults(defaultProducts);
    setDropdown([]);
    setDropdownStyle("2px solid #e5e7eb");
    setPriceFilter(10000);
  };

  const searchForCategory = (category) => {
    setResults(hybridIndex.search(category));
    setQuery(category);
  };

  const priceHighToLow = () => {
    setResults([...results].sort((a, b) => b.price - a.price));
  };

  const priceLowToHigh = () => {
    setResults([...results].sort((a, b) => a.price - b.price));
  };

  const settingPriceRange = (e) => {
    e.preventDefault();
    const searchResults = hybridIndex
      .search(query)
      .filter((product) => product.price < priceFilter);
    setResults(searchResults);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResults(hybridIndex.search(query));
    setDropdown([]);
    setDropdownStyle("2px solid #e5e7eb");
  };

  const searchValue = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const searchResults = hybridIndex.search(value);
      setDropdown(searchResults);
      setDropdownStyle(searchResults.length > 0 ? "none" : "2px solid #e5e7eb");
    } else {
      setDropdown([]);
    }
  };

  const handleBackToSearch = () => {
    setCheckout(false); 
  };

  useEffect(() => {
    const fetchData = async () => {
      if (userID.length>10) {
        console.log(userID);
  
        try {
          const response = await fetch(`http://localhost:9000/users/${userID}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          const data = await response.json();
          setAccountUser(data);
          setCart(data.Cart || []);
          setLoginAction(true);
          console.log(data);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
    };
  
    fetchData();
  }, [userID]);
  
  
  useEffect(() => {
    const defaultProducts = products.filter((data) => data.default === "yes");
    setResults(defaultProducts);

    if (isFirstRender.current && accountuser && accountuser._id) {
      isFirstRender.current = false;
      updateUser(); // Fetch user data once on first render if user is logged in
    }
  }, [accountuser, updateUser]);

  return (
    <React.Fragment>
      <Nav cart={cart} setCart={setCart} user={accountuser} setUser={setAccountUser} updateUser={updateUser} loginAction={loginAction} setLoginAction={setLoginAction}/>
      {checkout ? <Checkout checkoutProduct={checkoutProduct} handleBackToSearch={handleBackToSearch} /> : (<div className="search-container">
        <Filter
          priceHightoLow={priceHighToLow}
          priceLowtoHigh={priceLowToHigh}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          settingPriceRange={settingPriceRange}
          handleClear={handleClear}
          searchForPhone={() => searchForCategory("phone")}
          searchForAudio={() => searchForCategory("audio")}
          searchForCamera={() => searchForCategory("camera")}
          searchForSpeaker={() => searchForCategory("speaker")}
          searchForTablet={() => searchForCategory("tablet")}
          searchForLaptop={() => searchForCategory("laptop")}
        />
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                value={query}
                onChange={searchValue}
                placeholder="search for product..."
                style={{ borderBottom: dropdownStyle}}
              />
              <button type="submit">Go</button>
            </div>
            {dropdown.length > 0 && (
              <Dropdown
                dropdown={dropdown}
                setQuery={setQuery}
                setResults={setResults}
                setDropdown={setDropdown}
                setDropdownStyle={setDropdownStyle}
              />
            )}
          </form>
          <ProductGrid
            results={results}
            addToCart={addToCart}
            user={accountuser}
            setCheckout={setCheckout}
            setCheckoutProduct={setCheckoutProduct}
          />
        </div>
      </div>)
     }
    </React.Fragment>
  );
};

export default ProductSearch;
